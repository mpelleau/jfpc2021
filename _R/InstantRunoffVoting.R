#!/usr/bin/Rscript

votes <- list(
    c("a", "b", "c", "d"),
    c("d", "b", "a", "c"),
    c("c", "b", "d", "a"),
    c("b", "e")
)

votes <- list(
    c("a", "b", "c", "d", "a"),
    c("d", "b", "a", "c", "b"),
    c("c", "b", "d", "a", "d"),
    c("a", NA, "e", NA, "e")
)
votes <- append(votes, votes)


CleanVotes <- function(votes) {
    CleanVote <- function(vote) {
        vote <- subset(vote, !is.na(vote))
        vote <- subset(vote, !duplicated(vote))
    }
    return(lapply(votes, CleanVote))

}

GetCurrentVotes <- function(votes) {
        ## Create factor levels for the candidates
        lvls <- unique(unlist(votes))
        ## Create Factor Vector with the current votes
        return(factor(sapply(votes, head, n = 1), levels = lvls))
    }

GetRankings <- function(cvotes) sort(table(cvotes), decreasing = TRUE)

NextVotes <- function(votes, losers) {
    NextVote <- function(vote) subset(vote, !(vote %in% losers))
    return(lapply(votes, NextVote))
}

HasWinner <- function(rankings) rankings[1] > sum(rankings) / 2

HasLoser <- function(rankings) rankings[1] > tail(rankings, 1)

GetLoser <- function(rankings) tail(names(rankings), 1)

BulkElimination <- function(rankings) {
    i <- 1
    n <- sum(rankings)
    #print(n)
    while(i <= length(rankings)) {
        n <- n - rankings[i]
        #print(n)
        #print(rankings[i])
        if(rankings[i] > n) return(tail(names(rankings), -i))
        else i <- i + 1
    }
    return(character())
}

BreakTieElimination <- function(rankings) {
    losers <- subset(names(rankings) , rankings == min(rankings))
    return(sample(losers, size = 1))
}


InstantRunoffVoting <- function(votes) {
    i <- 1
    repeat {
        cvotes <- GetCurrentVotes(votes)
        rankings <- GetRankings(cvotes)
        cat("\n\n### TOUR", i, "\nVOTES : \n")
        print(cvotes)
        cat("\nRANGS : \n")
        print(rankings)
        ## browser()
        if( HasWinner(rankings)) {
            winner <- names(rankings[1])
            cat("\nLE GAGNANT EST ", winner, ".\n", sep = "")
            return(winner)
        } else if( HasLoser(rankings)) {
            ## losers <- character()
            losers <- BulkElimination(rankings)
            if(length(losers) == 0) {
                cat("ÉGALITÉ ENTRE PERDANTS !\n")
                losers <- BreakTieElimination(rankings)
            }
           # browser()
            cat("\nLE OU LES PERDANTS SONT :\n", paste(losers, collapse = "\n"), "\n", sep = "")
            votes <- NextVotes(votes, losers)
        } else {
            cat("ÉGALITÉ ENTRE GAGNANTS !\n")
            cat(paste(names(rankings), collapse = "\n"))
            return(names(rankings));
        }
        i <- i + 1
    }
}

export interface TeamsRanking {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    response: Response[]
}

export interface Parameters {
    season: string
}

export interface Response {
    position: number
    team: Team
    points: number
    season: number
}

export interface Team {
    id: number
    name: string
    logo: string
}

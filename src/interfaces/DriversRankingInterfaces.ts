export interface DriversRankingInterface {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    response: DriverRankingResponse[]
}

export interface Parameters {
    season: string
}

export interface DriverRankingResponse {
    position: number
    driver: Driver
    team: Team
    points: number | null
    wins: number
    behind: number
    season: number
}

export interface Driver {
    id: number
    name: string
    abbr: string
    number: number
    image: string
}

export interface Team {
    id: number
    name: string
    logo: string
}

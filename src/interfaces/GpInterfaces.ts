export interface GpInfoInterface {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    response: GpInfoResponseInterface[]
}

export interface Parameters {
    next: string
    type: string
    timezone: string
}

export interface GpInfoResponseInterface {
    id: number
    competition: Competition
    circuit: Circuit
    season: number
    type: string
    laps: Laps
    fastest_lap: FastestLap
    distance: string
    timezone: string
    date: Date
    weather: null
    status: string
}

export interface Circuit {
    id: number
    name: string
    image: string
}

export interface Competition {
    id: number
    name: string
    location: Location
}

export interface Location {
    country: string
    city: string
}

export interface FastestLap {
    driver: Driver
    time: null
}

export interface Driver {
    id: null
}

export interface Laps {
    current: null
    total: number
}

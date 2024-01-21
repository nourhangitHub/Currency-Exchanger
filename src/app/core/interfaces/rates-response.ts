export interface RatesResponse {
    success: boolean,
    timestamp: number,
    base: string,
    date: string,
    rates: object
}

export interface ConvertObject {
    from: string,
    to: string,
    amount: string,
    date :  string,
    base : string,
}

export interface ConvertResponse {
    success : boolean,
     query : object,
     info : object
     historical : string,
     date :  string 
     result : number
}

export interface ErrorResponse{
    error: ErrorInfo,
    success: boolean
}

export interface ErrorInfo{
    code: number,
    info: string
}

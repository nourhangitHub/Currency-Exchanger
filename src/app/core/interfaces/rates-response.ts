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
    amount: number
}

export interface ConvertResponse {
    success : boolean,
     query : object,
     info : object
     historical : string,
     date :  string 
     result : number
}

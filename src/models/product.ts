export default interface Product {
    code:number,
    tenantCode: number,
    name: String,
    description?: String,
    price: number,
    tagCodes: String[]
}
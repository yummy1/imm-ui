export {
    isArray,
    isFunction,
    isObject,
    isString,
    isDate,
    isPromise,
    isSymbol,
} from '@vue/shared'

export const isBoolean = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'

export const isNumber = (o: any) => Object.prototype.toString.call(o).slice(8, -1) === 'Number'

export const isUndefined = (val: any): val is undefined => val === undefined

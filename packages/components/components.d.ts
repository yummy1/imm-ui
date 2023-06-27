declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('imm-ui').Button
        kInput: typeof import('imm-ui').Input
        kUpload: typeof import('imm-ui').Upload
        kLink: typeof import('imm-ui').Link
    }
}
export { }

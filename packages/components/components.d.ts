declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        immButton: typeof import('imm-ui').Button
        immInput: typeof import('imm-ui').Input
        immUpload: typeof import('imm-ui').Upload
        immLink: typeof import('imm-ui').Link
    }
}
export { }

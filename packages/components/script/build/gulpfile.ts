import { spawn } from 'child_process'
import { series, src, dest, task, parallel } from 'gulp'
import less from "gulp-less"
import autoprefixer from 'gulp-autoprefixer'
import { componentPath } from '../utils/paths'
console.log(componentPath);

const run = async (command: string) => {
    //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
    const [cmd, ...args] = command.split(' ')
    return new Promise((resolve, reject) => {
        const app = spawn(cmd, args, {
            cwd: componentPath,//执行命令的路径
            stdio: 'inherit', //输出共享给父进程
            shell: true
        })
        //执行完毕关闭并resolve
        app.on('close', resolve)
    })
}

//处理样式
const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        .pipe(
            autoprefixer()
        )
        .pipe(dest(`${componentPath}/dist/lib`))
        .pipe(dest(`${componentPath}/dist/es`));
};

//打包组件
const buildComponent = async () => {
    await run(`cd ${componentPath}`)
    run('pnpm run build')
}

export default series(
    async () => run(`rm -rf ${componentPath}/dist`),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    ))

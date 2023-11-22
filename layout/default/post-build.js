import { execSync } from 'child_process';

function run(cmd) {
    console.log(`run: ${cmd}`);
    execSync(cmd);
}

export default async function (config, output) {
    console.log(`post-build: cwd = ${process.cwd()}, output = ${output}`);
    run(`mkdir -p ${output}/static`);
    run(`cp ./static/* ${output}/static/`);
    run(`npx tailwindcss -i ./custom-tailwind.txt -o ${output}/static/custom-tailwind.css`);
};
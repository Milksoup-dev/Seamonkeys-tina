import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const workDirectory = path.join(process.cwd(), 'content/work-with-us')

export async function getWorkData(){
    const filePath = path.join(workDirectory, 'work-with-us.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    const data = matterContent.data
    return {
        ... data
    }
}

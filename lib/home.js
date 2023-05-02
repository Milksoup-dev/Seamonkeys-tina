import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const homeDirectory = path.join(process.cwd(), 'content/home')

export async function getSection(template){
    const filePath = path.join(homeDirectory, 'home.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    const languages = matterContent.data.sections.filter(section => section.template === template)
    return {
        ... languages[0]
    }
}
export async function getMeta(){
    const filePath = path.join(homeDirectory, 'home.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    
    return {
        ... {
            title: matterContent.data.title_tag,
            description: matterContent.data.description_tag,
            image: matterContent.data.image
        }
    }
}

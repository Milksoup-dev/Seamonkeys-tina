import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const partialsDirectory = path.join(process.cwd(), 'content/partials')

export async function getContacts(){
    const filePath = path.join(partialsDirectory, 'contacts.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    return {
        ... matterContent.data
    }
}

export async function getMenu(){
    const filePath = path.join(partialsDirectory, 'menu.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    return {
        ... matterContent.data
    }
}

export async function getSocials(){
    const filePath = path.join(partialsDirectory, 'socials.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    return {
        ... matterContent.data
    }
}
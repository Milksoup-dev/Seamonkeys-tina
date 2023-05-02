import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio')

export async function getPortfolioData(){
    const fileNames = await fs.readdir(portfolioDirectory)
    const portfolio = []
    for(const fileName of fileNames){
        const id = fileName.replace(/\.md$/, '')
        const filePath = path.join(portfolioDirectory, fileName)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const matterContent = matter(fileContent)
        portfolio.push({
            id,
            ... matterContent.data
        })
    }
    return portfolio
}

export async function getPortfolioIds(lang){
    const portfolio = await getPortfolioData()
    return portfolio.map(item => {
        return {
            params: {
                id: item.id
            }, locale: lang
        }
    })
}

export async function getProject(id){
    const filePath = path.join(portfolioDirectory, `${id}.md`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const matterContent = matter(fileContent)
    return {
        id,
        ... matterContent.data
    }
}

export async function getPrev(id){
    const fileNames = await fs.readdir(portfolioDirectory)
    const portFolioIds = []
    for(const fileName of fileNames){
        const id = fileName.replace(/\.md$/, '')
        portFolioIds.push(id)
    }
    const pid = portFolioIds.indexOf(id)
    if((pid != -1) && (pid - 1 >= 0)){
        return await getProject(portFolioIds[pid-1])
    }else{
        return {}
    }
}

export async function getNext(id){
    const fileNames = await fs.readdir(portfolioDirectory)
    const portFolioIds = []
    for(const fileName of fileNames){
        const id = fileName.replace(/\.md$/, '')
        portFolioIds.push(id)
    }
    const pid = portFolioIds.indexOf(id)
    if((pid != -1) && (pid + 1 < portFolioIds.length)){
        return await getProject(portFolioIds[pid+1])
    }else{
        return {}
    }
}
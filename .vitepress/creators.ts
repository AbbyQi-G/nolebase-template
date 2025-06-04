export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '祁玉笔记',
    avatar: '',
    username: 'AbbyQi-G',
    title: '公众号撰写者',
    desc: 'Zotero、好用软件推荐、亚马逊电商、Photoshop',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/AbbyQi-G/nolebase-template' },
      { type: 'twitter', icon: 'twitter', link: 'https://abbyqi.netlify.app/%E7%AC%94%E8%AE%B0/' },
    ],
    nameAliases: ['祁玉笔记', '祁玉'],
    emailAliases: ['qyfwork@gmail.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')

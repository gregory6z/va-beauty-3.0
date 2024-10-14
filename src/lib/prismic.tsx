import * as prismic from "@prismicio/client"

export const repositoryName = "va-beauty-blog"
// Substitua com o nome do seu repositório
const endpoint = prismic.getRepositoryEndpoint(repositoryName)

export const client = prismic.createClient(endpoint, {
  fetchOptions: {
    cache: "no-store",
  },
  accessToken:
    "MC5ad3pwMWhBQUFDQUFzcTE3.77-9Y--_vSxBcO-_ve-_vTgc77-977-977-9Oe-_vTLvv73vv73vv70ibBkf77-977-977-977-977-9ZV7vv73vv70", // Use variáveis de ambiente para o token de segurança
})

// export function linkResolver(doc: PrismicDocument): string {
//   if (doc.type === 'post') {
//     return `/blog/${doc.uid}`;
//   }
//   return '/';
// }

import { Offers } from "@/app/(Home)/components/Offers"

import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { ServiceHeader } from "@/app/components/service-header"

const MarkdownText = `
## Passo 1: Consulta inicial  
- O procedimento começa com uma consulta inicial, onde o profissional discute suas preferências, expectativas e histórico médico.  
- Durante esta consulta, o profissional também examina suas sobrancelhas naturais e discute o formato desejado, cor e estilo.  
## Passo 2: Preparação  
- Antes de iniciar o procedimento, a área das sobrancelhas é limpa e desinfetada para garantir a segurança e a esterilidade.  
- O profissional também pode aplicar um anestésico tópico para minimizar qualquer desconforto durante o procedimento.  
## Passo 3: Mapeamento das sobrancelhas  
- Usando técnicas de medição e proporção facial, o profissional mapeia o formato das sobrancelhas para garantir simetria e precisão.  
- Isso é feito com lápis cosmético ou pigmento temporário para criar um guia claro para o procedimento.  
## Passo 4: Micropigmentação  
- Com a área de trabalho devidamente preparada e o mapa das sobrancelhas definido, o profissional começa o processo de micropigmentação.  
- Usando uma caneta de mão ou uma máquina especializada com agulhas ultrafinas, o pigmento é depositado na camada superficial da pele, imitando os pelos naturais das sobrancelhas.  
- O profissional trabalha com cuidado e precisão, ajustando a profundidade, a pressão e a direção das incisões para garantir resultados naturais e uniformes.  
## Passo 5: Ajustes finais  
- Após a conclusão da micropigmentação, o profissional avalia o resultado e faz ajustes finais conforme necessário para garantir que as sobrancelhas atendam às expectativas do cliente.  
- Qualquer excesso de pigmento é removido e a área é limpa novamente.  
## Passo 6: Cuidados pós-procedimento  
- O cliente recebe instruções detalhadas sobre os cuidados pós-procedimento, incluindo a aplicação de pomadas cicatrizantes e a evitar a exposição prolongada ao sol e à água.  
- Recomenda-se uma consulta de acompanhamento para avaliar a cicatrização e fazer ajustes
`

export default function Service() {
  return (
    <div className="h-full min-h-screen w-full">
      <header className="mx-auto mt-20 flex h-full max-w-[900px] flex-col px-[1.5rem] lg:flex-row lg:gap-20 lg:px-0 ">
        <div className=" h-[250px] lg:h-[450px] lg:w-[450px]">
          <Image
            className=" h-full w-full object-cover"
            src="/sourcils.png"
            width={450}
            height={450}
            alt={""}
          ></Image>
        </div>
        <div className=" flex h-full flex-col justify-between lg:min-h-[450px]">
          <div className="flex h-full flex-col lg:min-h-[450px] lg:justify-evenly ">
            <h1 className="mt-4 text-2xl lg:mt-0 lg:text-4xl">
              Micropigmentacao{" "}
            </h1>
            <p className="lg:mt-2 lg:text-xl">Duration 15 minutes</p>
            <div className=" flex h-full flex-col justify-center">
              <p className="my-4 text-6xl lg:my-12">€ 330,00</p>
              <button className="  bg-black px-12 py-4 text-lg text-gray-100">
                Reserver maintenant
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto mt-20 flex flex-col gap-4 px-[1.5rem] lg:max-w-[900px] lg:px-0">
        <h1 className="text-3xl ">Descricao</h1>
        <p className="lg:text-xl">
          "Desperte sua beleza natural com a micropigmentação, um procedimento
          preciso e duradouro que realça suas características faciais de maneira
          sutil e elegante. Nossa equipe especializada utiliza técnicas
          avançadas para garantir resultados personalizados, respeitando sua
          individualidade e estilo. Experimente a praticidade e a beleza
          duradoura da micropigmentação e descubra uma nova confiança em sua
          aparência, todos os dias."
        </p>
      </div>

      <div className="mx-auto mb-20 mt-10 flex flex-col gap-4 px-[1.5rem] lg:max-w-[750px] lg:px-0">
        <h1 className="text-2xl">Passo a passo:</h1>
        <ReactMarkdown
          components={{
            h2: ({ ...props }) => (
              <h1 className="text-lg font-semibold" {...props} />
            ),
          }}
        >
          {MarkdownText}
        </ReactMarkdown>
      </div>

      <Offers></Offers>
    </div>
  )
}

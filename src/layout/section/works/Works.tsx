import { styled } from "styled-components"
import { TabMenu } from "./tabMenu/TabMenu"
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle"
import work1 from "../../../components/image/workimage/work-1.webp"
import work2 from "../../../components/image/workimage/work-2.webp"
import work3 from "../../../components/image/workimage/work-3.webp"
import work4 from "../../../components/image/workimage/work-4.webp"
import work5 from "../../../components/image/workimage/work-5.webp"
import work6 from "../../../components/image/workimage/work-6.webp"
import work7 from "../../../components/image/workimage/work-7.webp"
import work8 from "../../../components/image/workimage/work-8.webp"
import work9 from "../../../components/image/workimage/work-9.webp"
import { Container } from "../../../components/container/Container"
import { useState } from "react"


// const tabsItems = ["Показать все", "Парикмахерские услуги", "Маникюр", "Педикюр"]

const tabsItems: Array<{status:"Педикюр"| "Маникюр"| "Парикмахерские услуги"|  "all", title: string}> = [
    {
        title: "Показать все",
        status: "all"
    },
    {
        title: "Парикмахерские услуги",
        status: "Парикмахерские услуги" 
    },
    {
        title:"Маникюр" ,
        status: "Маникюр"
    },
    {
        title: "Педикюр",
        status: "Педикюр"
    }
]

const imageWorkData = [
    {
        src: work1,
        alt: "work1",
        type: "Парикмахерские услуги" 
    },
    {
        src: work2,
        alt: "work2",
        type: "Парикмахерские услуги"
    },
    {
        src: work3,
        alt: "work3",
        type: "Парикмахерские услуги"
    },
    {
        src: work4,
        alt: "work4",
        type: "Маникюр"
    },
    {
        src: work5,
        alt: "work5",
        type: "Маникюр"
    },
    {
        src: work6,
        alt: "work6",
        type: "Маникюр"
    },
    {
        src: work7,
        alt: "work7",
        type: "Педикюр"
    },
    {
        src: work8,
        alt: "work8",
        type: "Педикюр"
    },
    {
        src: work9,
        alt: "work9",
        type: "Педикюр"
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = imageWorkData

    if(currentFilterStatus === "Парикмахерские услуги" ){
        filteredWorks = imageWorkData.filter(work => work.type === "Парикмахерские услуги")
    };

    if(currentFilterStatus === "Маникюр" ){
        filteredWorks = imageWorkData.filter(work => work.type === "Маникюр")
    };

    if(currentFilterStatus === "Педикюр" ){
        filteredWorks = imageWorkData.filter(work => work.type === "Педикюр")
    };


    function changeFilterStatus (value: "Педикюр"| "Маникюр"| "Парикмахерские услуги"|  "all") {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledWork>
            <SectionTitle>
                Наши работы
            </SectionTitle>

            <Container>

                <TabMenu menuItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <WorkPhoto>
                    {filteredWorks.map((W) => {
                        return (
                            <Image src={W.src} alt={W.alt} />
                        )

                    })}
                </WorkPhoto>
            </Container>
        </StyledWork>
    )
}

const StyledWork = styled.section`
margin-top: 180px;
`
const Image = styled.img`
width: 416px;
height: 416px;
`
const WorkPhoto = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 60px;
  gap:24px;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  gap:24px;
    
`
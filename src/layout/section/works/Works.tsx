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


const worksItems = ["Показать все", "Парикмахерские услуги", "Маникюр", "Педикюр"]

export const Works = () => {

    return (
        <StyledWork>
            <SectionTitle>
                Наши работы
            </SectionTitle>

            <Container>

                <TabMenu menuItems={worksItems} />
                <WorkPhoto>
                    <Image src={work1} alt="work1" />
                    <Image src={work2} alt="work2" />
                    <Image src={work3} alt="work3" />
                    <Image src={work4} alt="work4" />
                    <Image src={work5} alt="work5" />
                    <Image src={work6} alt="work6" />
                    <Image src={work7} alt="work7" />
                    <Image src={work8} alt="work8" />
                    <Image src={work9} alt="work9" />
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
  gap:24px;
    
`
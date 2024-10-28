import Card from "./Card"
export default function Experience() {

    const data = [
        {id: 1, data:"NTT Data - Campus Ambassador"},
        {id: 2, data:"LANDCOBA - Summer Intern"},
        {id: 3, data:"In-Nova - Projects Department Member"},
        {id: 4, data:"kjdflkrakj"},
        {id: 5, data:"kjdflkrakj"}
    ]

    const getCards = () => {
        return data.map((item, index) => {
            return <Card key={index} id={item.id} data={item.data} />
        })
    }

    return (
        <div className="flex flex-col px-6 sm:px-[10vw] md:px-[12vw] mb-10">
            <h2 className="text-4xl text-start mb-7">Experience</h2>
            {getCards()}
            {}
        </div>
    )
}
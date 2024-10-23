import Card from "./Card"
export default function Experience() {

    const data = [
        {id: 1, data:"kjdflkrakj"},
        {id: 2, data:"kjdflkrakj"},
        {id: 3, data:"kjdflkrakj"},
        {id: 4, data:"kjdflkrakj"},
        {id: 5, data:"kjdflkrakj"}
    ]

    const getCards = () => {
        return data.map((item, index) => {
            return <Card key={index} id={item.id} data={item.data} />
        })
    }

    return (
        <div className="flex flex-col px-6 sm:px-[10vw] md:px-[12vw]">
            <h2 className="text-4xl text-start mb-4">Experience</h2>
            {getCards()}
            {}
        </div>
    )
}
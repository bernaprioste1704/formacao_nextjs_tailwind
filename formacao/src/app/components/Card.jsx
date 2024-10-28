export default function Card(props) {

    const {id, data} = props

    const header = <h1></h1>

    return (
        <div className="p-4 rounded-xl bg-green-700 mb-2">{data}
        {header}
        </div>
    )
}
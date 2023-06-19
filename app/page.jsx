import neo from "neo4j-driver"

export default function Page() {

    const {NEO_URL, NEO_USER, NEO_PASSWORD} = process.env
    const driver = neo.driver(
        NEO_URL, neo.auth.basic(NEO_USER, NEO_PASSWORD)
    )

    async function getData(){
        try {
            console.log("running request")
            const res = await driver.executeQuery('SHOW DATABASES', {})
            console.log(res)
        } catch (error){
            console.error(error)
        }
    }

    getData()

    return <h1>Hello, Next.js!</h1>
  }
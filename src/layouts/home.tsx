import Footer from "../components/layout/Footer"
import useDirection from "../hooks/useDirection"

const styles = {
    container: {
      padding: '0 32px',
      margin: '0 16px',
    }
  }

export default function Home(props: {
    children: React.ReactNode
}) {

    const { toggleDirection } = useDirection()

    return (
        <div>
            <div style={styles.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
import Footer from "../components/layout/Footer"

const styles = {
    container: {
      padding: '0 32px',
      margin: 'auto',
      maxWidth: 1080,
    }
  }

export default function Home(props: {
    children: React.ReactNode
}) {

    return (
        <div>
        <div style={styles.container}>
            {props.children}
        </div>
        <Footer />
        </div>
    )
}
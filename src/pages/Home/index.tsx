import ContactList from '../../containers/ContactList'
import SideBar from '../../containers/SideBar'

const Home = () => {
  return (
    <>
      <SideBar viewPage />
      <ContactList />
    </>
  )
}

export default Home

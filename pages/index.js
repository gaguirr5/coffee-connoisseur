import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Card from '../components/card';
import coffeeStores from '../data/coffee-stores.json'

export default function Home() {
  
  const handleOnBannerClick = () =>{
    console.log('hi banner button')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Banner 
          buttonText='View Stores nearby' 
          handleOnClick={handleOnBannerClick}
        />

        <div className={styles.heroImage}>
            <Image 
              src="/static/hero-image.png" 
              width={700} 
              height={400} 
              alt=''  
            />  
          </div>

        <div className={styles.cardLayout}>
          {
            coffeeStores.map(({id, name, imgUrl, href}) => {
              return(
                <Card 
                  key={id}
                  name={name}
                  imgUrl={imgUrl} 
                  href={`/coffee-store/${id}`}
              /> 
              )
            })}

           
        </div>
        
      </main>
    </div>
  )
}

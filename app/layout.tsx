import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import styles from './ui/layout.module.css'
import SideBar from './ui/sidebar/sidebar'
import SideBarItem from './ui/sidebar/item/sidebar-item'
import { LuLayoutDashboard } from 'react-icons/lu'
import { HiOutlineTicket } from 'react-icons/hi2'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service Desk',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <SideBar>
              <SideBarItem
                icon={<HiOutlineTicket size={20} />}
                text="Novo Ticket"
                alert
              />
              <hr className="my-3" />
              <SideBarItem
                icon={<LuLayoutDashboard size={20} />}
                text="Dashboard"
                active
              />
              <SideBarItem
                icon={<LuLayoutDashboard size={20} />}
                text="Triagens"
                alert
              />
              <SideBarItem
                icon={<LuLayoutDashboard size={20} />}
                text="Tickets"
              />
            </SideBar>
          </div>
          <main className="flex flex-col  overflow-y-scroll h-screen w-full flex-grow p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

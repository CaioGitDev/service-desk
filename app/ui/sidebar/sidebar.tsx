import IPOLogo from '@/public/images/logo.svg'
import UserAvatar from '@/public/images/user-avatar.svg'
import { FiMoreVertical } from 'react-icons/fi'
import Image from 'next/image'

export default function SideBar({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex  items-center">
          <Image src={IPOLogo} alt="IPO Logo" width={200} />
        </div>
        <div className="flex-1 px-3 overflow-y-auto">{children}</div>

        <div className="border-t flex p-3">
          <Image
            src={UserAvatar}
            alt="user avatar"
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center w-52 ml-3`}>
            <div className="leading-4">
              <h4 className="font-semibold">Caio Rosa</h4>
              <span className="text-xs text-gray-600">Desenvolvimento</span>
            </div>
            <FiMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

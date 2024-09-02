import { json } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { siteName } from '~/utils/sitename'

export function meta() {
  return [{ title: `${siteName} - Admin` }]
}

export const loader = async () => {
  return json({
    breadcrumbs: [{ label: 'Admin', href: '/admin', isCurrentPage: true }],
  })
}

export default function Admin() {
  return (
    <>
      <Outlet />
    </>
  )
}

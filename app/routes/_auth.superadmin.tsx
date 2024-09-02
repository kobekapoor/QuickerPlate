import { json } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { siteName } from '~/utils/sitename'

export function meta() {
  return [{ title: `${siteName} - Super Admin` }]
}

export const loader = async () => {
  return json({
    breadcrumbs: [
      { label: 'Super Admin', href: '/superadmin', isCurrentPage: true },
    ],
  })
}

export default function SuperAdmin() {
  return (
    <>
      <Outlet />
    </>
  )
}

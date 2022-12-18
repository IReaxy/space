import { Menu } from 'antd';
import Link from 'next/link'

export default ({ path, label, ...props }) =>
( <Meun.Item {... { ...props }}>
    <Link href ={path} passHref>
        <a>{label}</a>
    </Link>
    </Meun.Item>
)
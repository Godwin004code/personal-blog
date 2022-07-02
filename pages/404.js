import Link from "next/link";

export default function Custom404() {
    return (
        <div style={{textAlign: 'center'}}>
        <h2>Lost? Go back to <Link to='/' >Home</Link></h2>
        </div>
    )
}
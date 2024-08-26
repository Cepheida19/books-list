import { DisplayBooks } from "./components/DisplayBooks"
import { WalletConnect } from "./components/WallerConnect"

export const MainPage = () => {
    return (
        <div>
            <WalletConnect />
            <DisplayBooks />
        </div>
    )
}
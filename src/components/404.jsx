import { useSelector } from "react-redux";

export function NotFound() {
    const state = useSelector((state) => state.handleCart);

    return (
        <>
            {
                state.map((item) => {
                    <div key={item.id}>
                        <p>{item.Price}</p>

                        <img
                            src={item.Image}
                            alt={item.title}
                            width={100}
                            height={75} />
                    </div>
                })
            }
        </>
    )
}
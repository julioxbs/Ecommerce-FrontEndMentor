import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, purchase } from '../../features/counter/counterSlice';
import "./style.css";

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return(
        <div className="d-md-flex gap-5 align-items-center">
            <div className="input__counter">
                <span onClick={() => dispatch(decrement())} href="#"><img style={{ width: '15px', cursor: 'pointer'}} src="/images/icon-minus.svg" alt="decrease" /></span>

                <p className="value p-0 m-0">{count}</p>

                <span onClick={() => dispatch(increment())} href="#"><img style={{ width: '15px', cursor: 'pointer'}} src="/images/icon-plus.svg" alt="increase" /></span>
            </div>

            <button disabled={count === 0 ? true : false} className="btn-buy" onClick={() => dispatch(purchase())}>
                <p className="p-0 m-0"><i class="bi bi-cart2"></i></p>
                <p className="p-0 m-0">Add to cart</p>
            </button>
        </div>
    );
}
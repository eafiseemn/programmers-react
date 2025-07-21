import { useAuth } from '@/auth/AuthProvider';
import S from './Product.module.css';
import useProducts from '@/hook/useProducts';
import { useRouter } from '@/router/RouterProvider';

function Product() {

  const { isAuth } = useAuth();
  const { products, loading } = useProducts();
  const { setHistoryRoute } = useRouter();
  
  /* 비회원 차단 */
  if(!isAuth) {
   return (
    <div className={S.invalid}>
      <span style={{
        fontSize:'10rem', marginBottom:'0.5rem'
      }}>🥺</span>
      <h3>상품 목록은 로그인 후 이용 가능합니다.</h3>
      <a href='#'>회원가입 하러 가기</a>
    </div> 
  )}
  
  /* 상품 정보 가져오기 */
  if(loading) return <p>로딩 중...🧐</p>
  let productList = null;
  if(!loading) {
    productList = products?.map(item => {
      const { id, name, price, image_url, description, sale } = item;
      const salePrice = price * (100 - sale) / 100;

      return (<li key={id}>
        <a href="#" onClick={(e)=>handleRouter(e, id)}>
          <figure>
            <img src={image_url} alt={description} />
          </figure>
          <span className={S.brand}>{name}</span>
          <span className={S.description}>{description}</span>
          <span className={sale === 0 ? S.realPrice : S.price}>{price.toLocaleString()} 원</span>
          { (sale !== 0) && <div>
            <span className={S.discount}>{sale}%</span>
            {/* {' 할인 → '} */}
            <span className={S.realPrice}>{salePrice.toLocaleString()} 원</span>
          </div>}
        </a>
      </li>)
    })
  }

  /* detail 페이지 연결하기 (Dynamic Routing) */
  const handleRouter = (e:React.MouseEvent<HTMLAnchorElement>, id:string) => {
    e.preventDefault();
    history.pushState(null, '', `/Product/${id}`);
    setHistoryRoute(`/Product/${id}`);
  }

  return (
    <div className={S.container}>
      <ul>
        {productList}
      </ul>
    </div>
  )
}
export default Product
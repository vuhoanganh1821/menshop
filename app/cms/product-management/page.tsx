import CMSLayout from 'components/Layout/CMSLayout'
import ProductManagement from 'pages/CMS/ProductManagement'

const ProductManagementPage = () => {
  return (
    <CMSLayout title="QUẢN LÝ SẢN PHẨM" topBarTitle="QUẢN LÝ SẢN PHẨM">
      <ProductManagement />
    </CMSLayout>
  );
}

export default ProductManagementPage

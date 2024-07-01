import React from 'react';
import AdminLayout from '../comp/layout/Layout';


const Page1 = () => {
  const breadcrumbItems = {
    // subTitle: '워크스페이스',
    mainTitle: '조직도 관리',
    describeTitle: '조직도 관리에서는 팀을 일괄 추가하거나 개별 추가한 후 순서를 편집하여 조직도를 구성할 수 있습니다.',
  };
  const pageName = 'organ-page'

  return (
    <AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
      <p>
        여기에 추가
      </p>
    </AdminLayout>
  );
};

export default Page1;

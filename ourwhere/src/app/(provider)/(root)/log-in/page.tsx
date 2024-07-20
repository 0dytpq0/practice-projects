'use client';
import LogInTemplate from '@/components/template/LogInTemplate';
import { IMGURLS } from '@/constants/images.constant';

function LogInPage() {
  const imgUrl = IMGURLS.logInImgUrl;

  return <LogInTemplate type="login" imgURL={imgUrl} title="LOG IN" />;
}

export default LogInPage;

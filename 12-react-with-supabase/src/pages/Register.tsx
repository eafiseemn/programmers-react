import { useId, useState } from 'react';
import S from './Register.module.css';
import Swal from 'sweetalert2';
import supabase from '@/supabase/supabase';

function Register() {

  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const avatarId = useId();

  const [ userEmail, setUserEmail ] = useState<string>('');
  const [ userPw, setUserPw ] = useState<string>('');
  const [ userPwConfirm, setUserPwConfirm ] = useState<string>('');
  const [ avatarFile, setAvatarFile ] = useState<File | null>(null);
  const [ avatarPreview, setAvatarPreview ] = useState<string | null>(null);
  const [ error, setError ] = useState<string | null>(null);
  

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.id === emailId) {
      setUserEmail(e.target.value);
    } else if(e.target.id === pwId) {
      setUserPw(e.target.value);
    } else if(e.target.id === pwConfirmId) {
      setUserPwConfirm(e.target.value);
    }
  }

  const handleAvatar = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0] ?? null;
    setAvatarFile(file);

    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
    }
  }

  const authRegister = async () => {
    const {
      data: { user },
      error: signUpError
    } = await supabase.auth.signUp({
        email: userEmail,
        password: userPw,
        // options: {
        //   emailRedirectTo: 'http://localhost:3000/ProfileSetting'
        // }
    })

    if ( signUpError || !user ) {
      Swal.fire({
        title: "회원가입 실패",
        text: "회원가입에 실패했습니다.",
        icon: "warning"
      });
      setError( signUpError?.message || '회원가입에 실패했습니다.' );

      return;
    }

    if(avatarFile) {

      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = fileName;

      const { error:uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, avatarFile, {
          upsert: true
        })
      
      if(uploadError) {
        console.error(uploadError);
        setError('이미지 업로드에 실패했습니다.');
        return;
      }
    }

    localStorage.clear();

    Swal.fire({
      title:"회원가입 완료",
      text: "로그인 페이지로 이동합니다.",
      icon: "success"
    }).then(()=>{
      history.pushState(null, '', '/Login');
      location.reload();
    });
  }

  const handleRegister = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(userPw !== userPwConfirm ) {
      setError("입력하신 비밀번호가 일치하지 않습니다.");
      return;
    }

    authRegister();
  }

  return (
    <div className={S.container}>
      <form onSubmit={handleRegister}>
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일 </label>
          <input type="email" id={emailId} required onChange={handleInput} />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호 </label>
          <input type="password" id={pwId} required onChange={handleInput} />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인 </label>
          <input type="password" id={pwConfirmId} required onChange={handleInput} />
        </div>
        <div>
          <label htmlFor={avatarId}>프로필 이미지 </label>
          { 
            avatarPreview && (
            <div style={{padding: '1rem 0', textAlign:'center'}}>
              <img 
                src={avatarPreview}
                alt="프로필"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '1px solid #ccc'
                }}
              />
            </div>
          )}
          <input type="file" id={avatarId} accept='image/*'
              onChange={handleAvatar}
           />
        </div>
        
        { error && <p>{error}</p>}
        <button type="submit">가입하기</button>
      </form>
    </div>
  )
}
export default Register
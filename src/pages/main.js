import React from 'react';
import { Container, Post, SkillBadge, Profile } from '../styles/common-styles';

export default function Main() {
    return (
        <Container>
            <div className="header" style={{display:'flex', height:'50px', justifyContent:'space-between'}}>
                <div>blog-name</div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{padding:'0 5px'}}>posts</div>
                    <div style={{padding:'0 5px'}}>github</div>
                </div>
            </div>
            <Profile>
                <div style={{position:'relative', flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div style={{ backgroundImage:'url(https://avatars.githubusercontent.com/u/61747121?s=400&v=4)', backgroundPosition:'center', width:'250px', height:'250px', borderRadius:'50%', backgroundColor:'#fcfcfc', backgroundSize:'cover'}}></div>
                    <div style={{padding: '10px'}}>short desc</div>
                </div>
                <div style={{flex:2, display:'flex', flexDirection:'column', padding:'20px', boxSizing:'border-box', alignItems:'center'}}>
                    <div style={{flex:1, fontSize:'18px'}}>안녕하세요 홍정기입니다.</div>
                    <div style={{flex:1, fontSize:'18px'}}>contact</div>
                    <div style={{flex:2, fontSize:'18px', display: 'flex', gap:'10px', flexWrap:'wrap', alignItems:'center'}}>
                        <SkillBadge>
                            html
                        </SkillBadge>
                        <SkillBadge>
                            css
                        </SkillBadge>
                        <SkillBadge>
                            javascript
                        </SkillBadge>
                    </div>
                </div>
            </Profile>
            <div className="latest" style={{width:'100%', backgroundColor:'beige'}}>
                <Post>
                    <div>Post Title</div>
                    <div>Post Description</div>
                    <div>Tags</div>
                    <div>Date</div>
                </Post>
            </div>
        </Container>
    )
}
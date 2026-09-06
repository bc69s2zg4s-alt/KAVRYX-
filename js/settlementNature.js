"use strict";
const SettlementNature={
    seed:1947,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        this.drawGrass(ctx,left+20,top+25,right-20,bottom-20,random);
        this.drawBushZones(ctx,left,top,right,bottom,random);
        this.drawForestZones(ctx,left,top,right,bottom,random);
        this.drawRocks(ctx,left,top,right,bottom,random);
    },
    blocked(x,y){
        if(Math.abs(x)<150&&Math.abs(y)<105)return true;
        if(Math.abs(y-110)<55&&(Math.abs(x)<410))return true;
        if(Math.abs(x)<55&&y>-250&&y<160)return true;
        if(x>250&&y<-45)return true;
        if(x<-280&&y<-10)return true;
        return false;
    },
    drawGrass(ctx,left,top,right,bottom,random){
        for(let i=0;i<260;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            const size=3+random()*6;
            ctx.fillStyle=random()>.5?"#3f4c3e":"#354136";
            ctx.fillRect(x,y-size,size*.45,size);
            ctx.fillRect(x+size*.4,y-size*.65,size*.4,size*.65);
            if(random()>.72){
                ctx.fillStyle="#4b5847";
                ctx.fillRect(x+size*.8,y-size*.85,size*.3,size*.55);
            }
        }
    },
    drawBushZones(ctx,left,top,right,bottom,random){
        const zones=[
            [left+70,top+85,150,100],
            [right-80,top+80,150,100],
            [left+90,bottom-65,180,80],
            [right-100,bottom-65,180,80]
        ];
        zones.forEach((zone)=>{
            for(let i=0;i<9;i++){
                const x=zone[0]+(random()-.5)*zone[2];
                const y=zone[1]+(random()-.5)*zone[3];
                if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
                this.drawBush(ctx,x,y,random);
            }
        });
    },
    drawBush(ctx,x,y,random){
        const s=7+random()*9;
        ctx.fillStyle="#1d241f";
        ctx.fillRect(x-s,y-s*.35,s*2,s);
        ctx.fillRect(x-s*.55,y-s,s*1.1,s);
        ctx.fillStyle="#354335";
        ctx.fillRect(x-s*.72,y-s*.28,s*.8,s*.5);
        ctx.fillRect(x-s*.05,y-s*.72,s*.9,s*.58);
        ctx.fillStyle="#4a5747";
        ctx.fillRect(x-s*.38,y-s*.52,s*.32,s*.22);
    },
    drawForestZones(ctx,left,top,right,bottom,random){
        const zones=[
            [left+55,top+55,110,160],
            [right-55,top+55,110,160],
            [left+70,bottom-45,130,90],
            [right-70,bottom-45,130,90]
        ];
        zones.forEach((zone)=>{
            for(let i=0;i<6;i++){
                const x=zone[0]+(random()-.5)*zone[2];
                const y=zone[1]+(random()-.5)*zone[3];
                if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
                this.drawTree(ctx,x,y,.8+random()*.35);
            }
        });
    },
    drawTree(ctx,x,y,scale){
        ctx.fillStyle="#171b18";
        ctx.fillRect(x-6*scale,y-3*scale,12*scale,43*scale);
        ctx.fillStyle="#493b2d";
        ctx.fillRect(x-4*scale,y-1*scale,8*scale,40*scale);
        ctx.fillStyle="#222a24";
        ctx.fillRect(x-25*scale,y-42*scale,50*scale,37*scale);
        ctx.fillRect(x-20*scale,y-59*scale,40*scale,25*scale);
        ctx.fillRect(x-10*scale,y-72*scale,20*scale,19*scale);
        ctx.fillStyle="#384738";
        ctx.fillRect(x-21*scale,y-38*scale,42*scale,27*scale);
        ctx.fillRect(x-16*scale,y-54*scale,32*scale,22*scale);
        ctx.fillRect(x-7*scale,y-65*scale,14*scale,15*scale);
        ctx.fillStyle="#4a5847";
        ctx.fillRect(x-14*scale,y-43*scale,10*scale,7*scale);
        ctx.fillRect(x+5*scale,y-55*scale,8*scale,6*scale);
    },
    drawRocks(ctx,left,top,right,bottom,random){
        for(let i=0;i<45;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(this.blocked(x-(left+right)/2,y-(top+bottom)/2))continue;
            const s=4+random()*9;
            ctx.fillStyle="#1d2220";
            ctx.fillRect(x-s,y-s*.4,s*2,s);
            ctx.fillStyle="#3b423e";
            ctx.fillRect(x-s*.6,y-s*.65,s*1.25,s*.5);
            ctx.fillStyle="#505650";
            ctx.fillRect(x-s*.3,y-s*.52,s*.5,s*.2);
        }
    }
};
window.KAVRYXSettlementNature=SettlementNature;
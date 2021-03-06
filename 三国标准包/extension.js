game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"三国标准包",content:function (config,pack){          
//lib.extensionMenu['extension_三国标准包'].a={
//name:'编辑此扩展',
//clear:true,
//onclick:function(){
//game.say1('编辑失败');
//}
//}          		
             var cardPack2 = [     
                    ['spade',1,'zl_jinjun'],                ['spade',6,'zl_zhengbing'],
                    ['spade',1,'juedou'],				    ['spade',2,'bagua'],
					['spade',3,'guohe'],					['spade',4,'guohe'],
					['spade',5,'qinglong'],					['spade',6,'lebu'],
                    ['spade',5,'zl_dazhengbian'],           
					['spade',7,'sha'],					    ['spade',8,'sha'],
					['spade',9,'sha'],				     	['spade',10,'sha'],
					['spade',11,'shunshou'],				['spade',12,'guohe'],
					['spade',13,'nanman'],					['spade',1,'shandian','thunder'],
					['spade',2,'cixiong'],                  ['spade',3,'shunshou'],
					['spade',4,'shunshou'],					['spade',5,'jueying'],
					['spade',6,'qinggang'],                 ['spade',7,'nanman'],
					['spade',8,'sha'],					    ['spade',9,'sha'],
					['spade',10,'sha'],					    ['spade',11,'wuxie'],
					['spade',12,'zhangba'],					['spade',13,'dawan'],
                    ['club',12,'zl_dazhengbian'],
					['spade',1,'guding'],					['spade',2,'tengjia'],
                    ['spade',1,'zl_zhengbian'],             ['spade',3,'sha'],
					['spade',3,'jiu'],					    ['spade',4,'sha','thunder'],
					['spade',5,'sha','thunder'],			['spade',6,'sha','thunder'],
					['spade',7,'sha','thunder'],			['spade',8,'sha','thunder'],
					['spade',9,'jiu'],					    ['spade',10,'bingliang'],                
					['spade',11,'tiesuo'],					['spade',12,'tiesuo'],
					['spade',13,'nanman'],                  ['spade',2,'hanbing'],
					['heart',1,'wanjian'],					['heart',1,'taoyuan'],
					['heart',1,'wuxie'],					['heart',2,'shan'],
					['heart',2,'shan'],					    ['heart',2,'huogong'],
					['heart',3,'tao'],					    ['heart',3,'wugu'],
					['heart',3,'sha','fire'],				['heart',4,'tao'],
                    ['heart',3,'zl_dazhengbian'],
					['heart',4,'wugu'],                     ['heart',4,'huogong'],
					['heart',5,'qilin'],					['heart',5,'chitu'],
					['heart',5,'tao'],				     	['heart',6,'shan'],
					['heart',6,'lebu'],				    	['heart',6,'sha'],
					['heart',7,'tao'],					    ['heart',7,'wuzhong'],
					['heart',7,'sha','fire'],				['heart',8,'shan'],
					['heart',8,'wuzhong'],					['heart',8,'shan'],
					['heart',9,'tao'],                      ['heart',9,'wuzhong'],
					['heart',9,'shan'],				    	['heart',10,'tao'],
					['heart',10,'sha'],					    ['heart',10,'sha','fire'],
					['heart',11,'tao'],					    ['heart',11,'wuzhong'],
                    ['heart',12,'guohe'],                   ['heart',13,'zl_zhengbian'],
					['heart',11,'shan'],					['heart',12,'tao'],
					['heart',12,'guohe'],					['heart',12,'shan'],
					['heart',12,'shandian'],				['heart',13,'shan'],
					['heart',13,'zhuahuang'],				['heart',13,'wuxie'],
                    ['heart',13,'zl_zhengbing'],            ['heart',7,'zl_jinjun'],
					['club',1,'juedou'],					['club',1,'liannu'],
                    ['club',11,'sha'],                      ['club',10,'tao'],
                    ['club',8,'shan'],                      ['club',6,'jiu'],
					['club',1,'baiyin'],					['club',2,'sha'],
					['club',2,'bagua'],				    	['club',2,'tengjia'],
					['club',2,'renwang'],					['club',3,'sha'],
					['club',3,'guohe'],					    ['club',3,'jiu'],
                    ['club',4,'zl_jinjun'],                 ['club',3,'zl_zhengbing'],
					['club',4,'sha'],				     	['club',4,'guohe'],
					['club',4,'bingliang'],                 ['club',5,'sha'],
					['club',5,'dilu'],					    ['club',5,'sha','thunder'],
					['club',6,'sha'],				    	['club',6,'lebu'],
					['club',6,'sha','thunder'],				['club',7,'sha'],
					['club',7,'nanman'],					['club',7,'sha','thunder'],
					['club',8,'sha'],				    	['club',8,'sha'],
					['club',8,'sha','thunder'],				['club',9,'sha'],
					['club',9,'sha'],				    	['club',9,'jiu'],
					['club',10,'sha'],				     	['club',10,'sha'],
					['club',10,'tiesuo'],    				['club',11,'sha'],
                    ['club',10,'zl_zhengbian'],             ['club',11,'shan'],
					['club',11,'sha'],					    ['club',11,'tiesuo'],
					['club',12,'jiedao'],					['club',12,'wuxie'],
					['club',12,'tiesuo'],					['club',13,'jiedao'],
					['club',13,'wuxie'],					['club',13,'tiesuo'],
                    ['club',10,'zl_zhengbing'],             ['club',9,'zl_jinjun'],
					['diamond',1,'juedou'],					['diamond',1,'zhuge'],
					['diamond',1,'zhuque'],					['diamond',2,'shan'],
					['diamond',2,'shan'],					['diamond',2,'tao'],
					['diamond',3,'shan'],					['diamond',3,'shunshou'],
					['diamond',3,'tao'],					['diamond',4,'shan'],
					['diamond',4,'shunshou'],				['diamond',4,'sha','fire'],
                    ['diamond',5,'zl_zhengbian'],           ['diamond',6,'qinggang'],
					['diamond',5,'shan'],					['diamond',5,'guanshi'],
					['diamond',5,'sha','fire'],				['diamond',6,'sha'],
					['diamond',6,'shan'],					['diamond',6,'shan'],
                    ['diamond',7,'zl_zhengbing'],           ['diamond',6,'zl_jinjun'],
					['diamond',7,'sha'],					['diamond',7,'shan'],
					['diamond',7,'shan'],					['diamond',8,'sha'],
					['diamond',8,'shan'],					['diamond',8,'shan'],
					['diamond',9,'sha'],					['diamond',9,'shan'],
                    ['diamond',9,'zl_dazhengbian'],
					['diamond',9,'jiu'],					['diamond',10,'sha'],
					['diamond',10,'shan'],					['diamond',10,'shan'],
					['diamond',11,'shan'],					['diamond',11,'shan'],
					['diamond',11,'shan'],					['diamond',12,'tao'],
					['diamond',12,'fangtian'],		        ['diamond',12,'huogong'],
					['diamond',12,'wuxie'],					['diamond',13,'sha'],
					['diamond',13,'zixin'],					['diamond',13,'hualiu'],
					['diamond',5,'muniu'],                  ['diamond',12,'jiu'],
                    ['diamond',5,'zl_jinjun'],              ['diamond',4,'zl_zhengbing'],
                 
             ];
             var cardPack = [                    
                    ['spade',1,'bz_zhaoxianling'],          ['club',7,'bz_zhaoxianling'],
                    ['diamond',3,'bz_zhaoxianling'],        ['heart',5,'bz_zhaoxianling'],
                    ['spade',1,'juedou'],				    ['spade',2,'bagua'],
					['spade',3,'guohe'],					['spade',4,'guohe'],
					['spade',5,'qinglong'],					['spade',6,'lebu'],
					['spade',7,'sha'],					    ['spade',8,'sha'],
					['spade',9,'sha'],				     	['spade',10,'sha'],
					['spade',11,'shunshou'],				['spade',12,'guohe'],
					['spade',13,'nanman'],					['spade',1,'shandian','thunder'],
					['spade',2,'cixiong'],                  ['spade',3,'shunshou'],
					['spade',4,'shunshou'],					['spade',5,'jueying'],
					['spade',6,'qinggang'],                 ['spade',7,'nanman'],
					['spade',8,'sha'],					    ['spade',9,'sha'],
					['spade',10,'sha'],					    ['spade',11,'wuxie'],
					['spade',12,'zhangba'],					['spade',13,'dawan'],
					['spade',1,'guding'],					['spade',2,'tengjia'],
					['spade',3,'jiu'],					    ['spade',4,'sha','thunder'],
					['spade',5,'sha','thunder'],			['spade',6,'sha','thunder'],
					['spade',7,'sha','thunder'],			['spade',8,'sha','thunder'],
					['spade',9,'jiu'],					    ['spade',10,'bingliang'],
                    ['spade',4,'bz_longzhongdui'],          ['club',12,'bz_longzhongdui'],
                    ['diamond',6,'bz_longzhongdui'],        ['heart',10,'bz_longzhongdui'],
					['spade',11,'tiesuo'],					['spade',12,'tiesuo'],
					['spade',13,'nanman'],					['spade',2,'hanbing'],
					['heart',1,'wanjian'],					['heart',1,'taoyuan'],
					['heart',1,'wuxie'],					['heart',2,'shan'],
					['heart',2,'shan'],					    ['heart',2,'huogong'],
					['heart',3,'tao'],					    ['heart',3,'wugu'],
					['heart',3,'sha','fire'],				['heart',4,'tao'],
					['heart',4,'wugu'],                     ['heart',4,'huogong'],
					['heart',5,'qilin'],					['heart',5,'chitu'],
					['heart',5,'tao'],				     	['heart',6,'tao'],
					['heart',6,'lebu'],				    	['heart',6,'tao'],
					['heart',7,'tao'],					    ['heart',7,'wuzhong'],
					['heart',7,'sha','fire'],				['heart',8,'tao'],
					['heart',8,'wuzhong'],					['heart',8,'shan'],
					['heart',9,'tao'],                      ['heart',9,'wuzhong'],
					['heart',9,'shan'],				    	['heart',10,'sha'],
					['heart',10,'sha'],					    ['heart',10,'sha','fire'],
                    ['spade',9,'bz_kanglongyouhui'],        ['club',11,'bz_kanglongyouhui'],
                    ['diamond',6,'bz_kanglongyouhui'],      ['heart',10,'bz_kanglongyouhui'],
					['heart',11,'sha'],					    ['heart',11,'wuzhong'],
					['heart',11,'shan'],					['heart',12,'tao'],
					['heart',12,'guohe'],					['heart',12,'shan'],
					['heart',12,'shandian'],				['heart',13,'shan'],
					['heart',13,'zhuahuang'],				['heart',13,'wuxie'],
					['club',1,'juedou'],					['club',1,'liannu'],
					['club',1,'baiyin'],					['club',2,'sha'],
					['club',2,'bagua'],				    	['club',2,'tengjia'],
					['club',2,'renwang'],					['club',3,'sha'],
					['club',3,'guohe'],					    ['club',3,'jiu'],
					['club',4,'sha'],				     	['club',4,'guohe'],
					['club',4,'bingliang'],                 ['club',5,'sha'],
					['club',5,'dilu'],					    ['club',5,'sha','thunder'],
					['club',6,'sha'],				    	['club',6,'lebu'],
					['club',6,'sha','thunder'],				['club',7,'sha'],
					['club',7,'nanman'],					['club',7,'sha','thunder'],
					['club',8,'sha'],				    	['club',8,'sha'],
					['club',8,'sha','thunder'],				['club',9,'sha'],
					['club',9,'sha'],				    	['club',9,'jiu'],
					['club',10,'sha'],				     	['club',10,'sha'],
					['club',10,'tiesuo'],					['club',11,'sha'],
					['club',11,'sha'],					    ['club',11,'tiesuo'],
					['club',12,'jiedao'],					['club',12,'wuxie'],
					['club',12,'tiesuo'],					['club',13,'jiedao'],
					['club',13,'wuxie'],					['club',13,'tiesuo'],
					['diamond',1,'juedou'],					['diamond',1,'zhuge'],
					['diamond',1,'zhuque'],					['diamond',2,'shan'],
					['diamond',2,'shan'],					['diamond',2,'tao'],
					['diamond',3,'shan'],					['diamond',3,'shunshou'],
					['diamond',3,'tao'],					['diamond',4,'shan'],
					['diamond',4,'shunshou'],				['diamond',4,'sha','fire'],
					['diamond',5,'shan'],					['diamond',5,'guanshi'],
					['diamond',5,'sha','fire'],				['diamond',6,'sha'],
					['diamond',6,'shan'],					['diamond',6,'shan'],
					['diamond',7,'sha'],					['diamond',7,'shan'],
					['diamond',7,'shan'],					['diamond',8,'sha'],
					['diamond',8,'shan'],					['diamond',8,'shan'],
					['diamond',9,'sha'],					['diamond',9,'shan'],
					['diamond',9,'jiu'],					['diamond',10,'sha'],
					['diamond',10,'shan'],					['diamond',10,'shan'],
					['diamond',11,'shan'],					['diamond',11,'shan'],
					['diamond',11,'shan'],					['diamond',12,'tao'],
					['diamond',12,'fangtian'],		        ['diamond',12,'huogong'],
					['diamond',12,'wuxie'],					['diamond',13,'sha'],
					['diamond',13,'zixin'],					['diamond',13,'hualiu'],
					['diamond',5,'muniu'],
                                                                   
				];
             var charactersyms = [
              'sy_lvbu1',
             ];
             var characterbzb = [
                 "caocao","liubei","sunquan","lvbu","diaochan","huatuo",
                 "zhugeliang","huangyueying","ganning","zhaoyun","guanyu",
                 "zhangfei","machao","sunshangxiang","daqiao","zhouyu",
                 "lvmeng","luxun","zhenji","simayi","guojia",
                 "xiahoudun","huanggai","zhangliao",
             ];
             var characterSJ   = [
              "shen_guanyu","shen_caocao","shen_lvbu","shen_lvmeng",
              "shen_zhugeliang","shen_simayi","shen_zhouyu","shen_zhaoyun",
             ];
             var characterList = [
                 'cw_bz_chengyu',  'cw_bz_simayi',
                 'qx_bz_yanliang', 'qx_bz_wenchou',
                 'qx_bz_guanning', 'sh_bz_huangzhong',
                 'sh_bz_fazheng',  'sh_bz_weiyan',
                 'dw_bz_dinfeng',  'cw_bz_guojia',
                 'dw_bz_xusheng',  'dw_bz_zhangzhao',
                 'qx_bz_liubiao',  'cw_bz_zhangchunhua',
                 'sh_bz_zhugeliang','dw_bz_sunjian',
                 'sh_bz_machao',   'qx_bz_gongsunzan',
                 'cw_bz_zhangliao','dw_bz_ganning',
                 'cw_bz_caocao',   'cw_bz_caoren',
                 'cw_bz_caiyan',   'cw_bz_xiahoudun',
                 'cw_bz_xunyu',    'cw_bz_zhenfu',
                 'cw_bz_jiaxu',    'sh_bz_liubei',
                 'sh_bz_zhaoyun',  'sh_bz_zhangfei',
                 'sh_bz_xushu',    'sh_bz_huangyueying',
                 'sh_bz_guanyu',   'sh_bz_pangtong',
                 'dw_bz_sunquan',  'dw_bz_sunce',
                 'dw_bz_daqiao',   'dw_bz_zhouyu',
                 'dw_bz_luxun',    'dw_bz_xiaoqiao',
                 'dw_bz_lusu',     'qx_bz_dongzhuo',
                 'qx_bz_lvbu',     'qx_bz_diaochan',
                 'qx_bz_zhangjiao','qx_bz_zhaoyun',
                 'qx_bz_yuanshao', 'qx_bz_huangshuo',                 
                 ];
                var characterList2 = [
                 'ln_xs','ln_tss', 'ln_qly','ln_mm',
                 "ln_ds","ln_bz",  'ln_jhwj','ln_zwj',
                 'ln_wzf','ln_wzt','ln_lqz','ln_mjn',
                 'ln_ehny','ln_fj','ln_qj','ln_zwy',
                 'ln_hyy','ln_nw', 'ln_fh','ln_jtxn',
                 'ln_dmsj','ln_lz','ln_cy','ln_djj', 
                 'ln_wzj',
                 ]; 
                var characterwm = [
                    'wm_hx','wm_zgl','wm_bq','wm_zl','wm_trj','wm_gz',
                    'wm_yy','wm_wq','wm_sb','wm_lj','wm_lw','wm_sw',
                ];
                var characterzzbj = [
                    'zzzz','zzxf','zzwl','zzlbw',
                    'zzls','zzqhl','zzxy','zzzy',
                    'zzsd','zzsbh','zz_HYY','zz_ZGL',
                    'zz_WQ','zz_LE',
                    'zz_GZ','zz_QY','zz_TRJ','zz_KQ',
                    'zz_XMB','zz_ZH',
                    'zz_ZC','zz_ZL','zz_HX','zz_sunwu',
                    'zz_caocao','zz_sb',
                    'zz_bq','zz_sz','zz_xx','zz_gg',
                    'zz_dzs','zz_huishi',
                    'zz_lyk','zz_xk','zz_hf','zz_yy',
                    'zz_lk','zz_mk',
                    'zz_md','zz_yz','zz_gsl',
                ];
           var characterList4 = [
                 'cw_bz_chengyu',  'cw_bz_simayi',
                 'qx_bz_yanliang', 'qx_bz_wenchou',
                 'qx_bz_guanning', 'sh_bz_huangzhong',
                 'sh_bz_fazheng',  'sh_bz_weiyan',
                 'dw_bz_dinfeng',  'cw_bz_guojia',
                 'dw_bz_xusheng',  'dw_bz_zhangzhao',
                 'qx_bz_liubiao',  'cw_bz_zhangchunhua',
                 'sh_bz_zhugeliang','dw_bz_sunjian',
                 'sh_bz_machao',   'qx_bz_gongsunzan',
                 'cw_bz_zhangliao','dw_bz_ganning',
                 'cw_bz_caocao',   'cw_bz_caoren',
                 'cw_bz_caiyan',   'cw_bz_xiahoudun',
                 'cw_bz_xunyu',    'cw_bz_zhenfu',
                 'cw_bz_jiaxu',    'sh_bz_liubei',
                 'sh_bz_zhaoyun',  'sh_bz_zhangfei',
                 'sh_bz_xushu',    'sh_bz_huangyueying',
                 'sh_bz_guanyu',   'sh_bz_pangtong',
                 'dw_bz_sunquan',  'dw_bz_sunce',
                 'dw_bz_daqiao',   'dw_bz_zhouyu',
                 'dw_bz_luxun',    'dw_bz_xiaoqiao',
                 'dw_bz_lusu',     'qx_bz_dongzhuo',
                 'qx_bz_lvbu',     'qx_bz_diaochan',
                 'qx_bz_zhangjiao','qx_bz_zhaoyun',
                 'qx_bz_yuanshao', 'qx_bz_huangshuo',
                 'ln_xs','ln_tss', 'ln_qly','ln_mm',
                 "ln_ds","ln_bz",  'ln_jhwj','ln_zwj',
                 'ln_wzf','ln_wzt','ln_lqz','ln_mjn',
                 'ln_ehny','ln_fj','ln_qj','ln_zwy',
                 'ln_hyy','ln_nw', 'ln_fh','ln_jtxn',
                 'ln_dmsj','ln_lz','ln_cy','ln_djj', 
                 'ln_wzj',
                 'zzzz','zzxf','zzwl','zzlbw',
                 'zzls','zzqhl','zzxy','zzzy',
                 'zzsd','zzsbh','zz_HYY','zz_ZGL',
                 'zz_WQ','zz_LE',
                 'zz_GZ','zz_QY','zz_TRJ','zz_KQ',
                 'zz_XMB','zz_ZH',
                 'zz_ZC','zz_ZL','zz_HX','zz_sunwu',
                 'zz_caocao','zz_sb',
                 'zz_bq','zz_sz','zz_xx','zz_gg',
                 'zz_dzs','zz_huishi',
                 'zz_lyk','zz_xk','zz_hf','zz_yy',
                 'zz_lk','zz_mk',
                 'zz_md','zz_yz','zz_gsl',
                 'wm_hx','wm_zgl','wm_bq','wm_zl','wm_trj','wm_gz',
                 'wm_yy','wm_wq','wm_sb','wm_lj','wm_lw','wm_sw',
           ];
    /*……………………………………………………………………三英模式……………………………………………………………………………*/
    if(config.sanyingmoshi){
        if(lib.brawl){
            lib.brawl.sanyingmoshi = {
                name:'三英模式',
                mode:'identity',
                intro:[
                  '<font color=#FF0>模式介绍</font> ：复刻官方的"三英模式"',
                  '<font color=#FF0>基本规则</font>：共四名玩家，三名反贼（大将、中坚、先锋）一名主公，游戏开始时大将发牌5张，中坚4张，先锋3张，主公8张并由先锋（主公下家）先开始游戏，在主公未进入第二状态时，由主公和玩家轮流进行回合，当主公进入第二状态时，回合轮替正常进行。',
                  '<font color=#FF0>游戏规则</font> ：休整：每当一名反贼阵营角色死去时，其他反贼角色摸牌一张，然后死去的角色进入“休整状态”，当该名角色处于“休整状态”的时长6回合后，其立即复活，但复活后，第一个回合无法行动。第二状态：当主公体力变为4或更低时，立即开始回合并变身。<br>同时，游戏时手中的武器牌可以进行重铸',
                  '<font color=#FF0>胜负条件</font> 主公：主公击杀所有反贼。反贼：主公阵亡。',
                  '<font color=#FF0>专属将池</font>：三国原版：<font color=#FF0>吕布</font>。本人原创：<font color=#FF0>黄帝、伏羲、炎帝、女娲、孙武、嬴政</font> ',
                ],
                
                content:{                  
                chooseCharacter:function(){
                                  
                                if(game.me==game.zhu){
                                    _status.event.trigger('init')
								charactersyms.randomSort();
								var num = 1;
								var list = [];								
								list = list.concat(charactersyms.randomRemove(num));
								return list;}
                                if(game.me!=game.zhu){
                                _status.event.trigger('init2')
                                characterbzb.randomSort();
								var num2 = 5;
								var list = [];								
								list = list.concat(characterbzb.randomRemove(num2));
								return list;
                                }
                                                    
					                                     
                },               
                chooseCharacterAi:function(player){
                                    if(player==game.zhu){
                                        if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								charactersyms.randomSort();
								player.init(charactersyms.randomRemove());							
                                    }
                                if(player!=game.zhu){
                                    if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterbzb.randomSort();
								player.init(characterbzb.randomRemove());
							
                    }
                    
                },
                gameStart:function(){
                    'step 0'
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/缺席-HITA.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/symsct.jpg");
                  for(var i=0;i<game.players.length;i++){
                  if(game.players[i].identity=='zhu') continue;
			        	game.players[i].identity='fan';
                        game.players[i].addSkill('syms_xz');
                        game.players[i].addSkill('syms_cz');
                        game.players[i].awakenSkill('bz_yisha');};
                  for(var i=0;i<game.players.length;i++){
                      game.players[i].addSkill('syms_cc');
                  }
                    'step 1'
                    game.zhu.addSkill('syms_th');
                    game.zhu.addSkill('SYMS_BN');
                    'step 2'                    
                    game.zhu.draw(8);
                    game.zhu.next.draw(3);
                    game.zhu.previous.draw(5);
                    game.zhu.previous.previous.draw(4);                                      
                    lib.translate.fan = '闯者'
				    lib.translate.zhu = '守将';
                    game.showIdentity();
                    'step 3'
                    game.phaseLoop(game.zhu.next);
                   
                }},
                init:function(){    
       game.addCharacterPack({
            skill:{    
                sy_shenwei:{
    audio:"ext:三国标准包:2",
    unique:true,
    trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    content:function (){
        trigger.num+=2;
    },
    mod:{
        maxHandcard:function (player,current){
            return current+2;
        },
    },  
                },
                sy_shenji:{
    unique:true,
    mod:{
        selectTarget:function (card,player,range){
            if(range[1]==-1) return;
            if(player.getEquip(1)) return;
            if(card.name=='sha') range[1]+=2;
        },
    },
    ai:{
        effect:{
            target:function (card,player,target,current){
                if(get.subtype(card)=='equip1') return -1;
            },
        },
    },  
                },
                sy_xiuluo:{
    audio:"ext:三国标准包:2",
    trigger:{
        player:"phaseBegin",
    },
    direct:true,
    filter:function (event,player){
        return player.countCards('j')>0;
    },
    content:function (){
        "step 0"
        var next=player.discardPlayerCard(player,2,'hj','是否一张手牌来弃置一张花色相同的判定牌？');
        next.filterButton=function(button){
            var card=button.link;
            if(!lib.filter.cardDiscardable(card,player)) return false;
            if(ui.selected.buttons.length==0) return true;
            if(get.position(ui.selected.buttons[0].link)=='h'){
                if(get.position(card)!='j') return false;
            }
            if(get.position(ui.selected.buttons[0].link)=='j'){
                if(get.position(card)!='h') return false;
            }
            return get.suit(card)==get.suit(ui.selected.buttons[0].link)
        };
        next.ai=function(button){
            var card=button.link;
            if(get.position(card)=='h'){
                return 11-get.value(card);
            }
            if(card.name=='lebu') return 5;
            if(card.name=='bingliang') return 4;
            if(card.name=='guiyoujie') return 3;
            return 2;
        };
        next.logSkill='sy_xiuluo';
    },
                }
            },
            character:{
                sy_lvbu2:['male','shen',4,['mashu','wushuang','sy_shenwei','sy_shenji','sy_xiuluo'],['ext:三国标准包/sy_lvbu2.jpg']]
            },
            translate:{
                sy_lvbu2:'暴怒战神',
                sy_shenwei:'神威',
                sy_shenji:'神戟',
                sy_xiuluo:'无前',
                'sy_xiuluo_info':'回合开始时，若你判定区内有牌，你可以弃置一张同花色的手牌将其中一张弃置',
                'sy_shenwei_info':'摸牌阶段你多摸两张牌。你的手牌上限加2',
                'sy_shenji_info':'在你没有装备武器牌时，使用的【杀】可以额外指定2名目标',
             
            }
        });
       game.addCharacterPack({
            skill:{               
            },
            character:{
                sy_lvbu1:['male','shen',8,['mashu','wushuang'],['ext:三国标准包/sy_lvbu1.jpg']]
            },
            translate:{
                sy_lvbu1:'最强神话',
             
            }
        });
    /*……………………………………………………………………………技能页……………………………………………………………………………………………*/
    lib.skill.syms_zjxz={
    mark:true,
    unique:true,
    init:function (player){
        player.storage.syms_zjxz=1;
        game.addVideo('storage',player,['syms_zjxz',player.storage.syms_zjxz]);
    },
    intro:{
        content:function (storage){
            return '中坚休整回合：'+storage+'/6';
        },
    },
    trigger:{
        player:"phaseBegin",
    },
    forced:true,
    filter:function (event,player){
    if(player.storage.syms_zjxz>=6)return false;
        return player.storage.syms_zjxz<6;
    },
    content:function (){
        player.$damagepop(1,'unknownx');
        player.storage.syms_zjxz+=1;        
        if(player.storage.syms_zjxz>6)
            player.storage.syms_zjxz=6;
        game.addVideo('storage',player,['syms_zjxz',player.storage.syms_zjxz]);
    },
                    };
    lib.skill.syms_zjxz2={
                    trigger:{player:'phaseBegin'},
                    forced:true,
                    filter:function (event,player){return player.storage.syms_zjxz==6;},
                    content:function(){
                        'step 0'                                    
                      player.previousSeat.previousSeat.revive(player.previousSeat.previousSeat.hp);
                      var pr=player.previousSeat.previousSeat;
                      if(player.previousSeat.previousSeat.maxHp<4){                
                          pr.recover(999);
                          pr.draw(4);
                          pr.skip('phaseJudge');
                          pr.skip('phaseDraw');
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }else{
                          pr.recover(999);
                          pr.draw(3);
                          pr.skip('phaseJudge')
                          pr.skip('phaseDraw')
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }
                        'step 1'
                      player.removeSkill('syms_zjxz')
                      player.removeSkill('syms_zjxz2')
                    }
                    };
    lib.skill.syms_xfxz={
    mark:true,
    unique:true,
    init:function (player){
        player.storage.syms_xfxz=1;
        game.addVideo('storage',player,['syms_xfxz',player.storage.syms_xfxz]);
    },
    intro:{
        content:function (storage){
            return '先锋休整回合：'+storage+'/6';
        },
    },
    trigger:{
        player:"phaseBegin",
    },
    forced:true,
    filter:function (event,player){
    if(player.storage.syms_xfxz>=6)return false;
        return player.storage.syms_xfxz<6;
    },
    content:function (){
        player.$damagepop(1,'unknownx');
        player.storage.syms_xfxz+=1;        
        if(player.storage.syms_xfxz>6)
            player.storage.syms_xfxz=6;
        game.addVideo('storage',player,['syms_xfxz',player.storage.syms_xfxz]);
    },
                    };
    lib.skill.syms_xfxz2={
                    trigger:{player:'phaseBegin'},
                    forced:true,
                    filter:function (event,player){return player.storage.syms_xfxz==6;},
                    content:function(){
                        'step 0'                      
                      player.nextSeat.revive(player.nextSeat.hp);
                      var pr=player.nextSeat;
                      if(player.nextSeat.maxHp<4){                
                          pr.recover(999);
                          pr.draw(4);
                          pr.skip('phaseJudge');
                          pr.skip('phaseDraw');
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }else{
                          pr.recover(999);
                          pr.draw(3);
                          pr.skip('phaseJudge')
                          pr.skip('phaseDraw')
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }
                        'step 1'
                      player.removeSkill('syms_xfxz')
                      player.removeSkill('syms_xfxz2')
                    }
                    };                  
    lib.skill.syms_djxz={
    mark:true,
    unique:true,
    init:function (player){
        player.storage.syms_djxz=1;
        game.addVideo('storage',player,['syms_djxz',player.storage.syms_djxz]);
    },
    intro:{
        content:function (storage){
            return '大将休整回合：'+storage+'/6';
        },
    },
    trigger:{
        player:"phaseBegin",
    },
    forced:true,
    filter:function (event,player){
    if(player.storage.syms_djxz>=6)return false;
        return player.storage.syms_djxz<6;
    },
    content:function (){
        player.$damagepop(1,'unknownx');
        player.storage.syms_djxz+=1;        
        if(player.storage.syms_djxz>6)
            player.storage.syms_djxz=6;
        game.addVideo('storage',player,['syms_djxz',player.storage.syms_djxz]);
    },
                    };
                    lib.skill.syms_djxz2={
                    trigger:{player:'phaseBegin'},
                    forced:true,
                    filter:function (event,player){return player.storage.syms_djxz==6;},
                    content:function(){
                        'step 0'                    
                      player.previousSeat.revive(player.previousSeat.hp);
                      var pr=player.previousSeat;
                      if(player.previousSeat.maxHp<4){                
                          pr.recover(999);
                          pr.draw(4);
                          pr.skip('phaseJudge');
                          pr.skip('phaseDraw');
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }else{
                          pr.recover(999);
                          pr.draw(3);
                          pr.skip('phaseJudge')
                          pr.skip('phaseDraw')
                          pr.skip('phaseDiscard');
                          pr.skip('phaseUse');
                      }
                        'step 1'
                      player.removeSkill('syms_djxz')
                      player.removeSkill('syms_djxz2')
                    }
                    };
                    lib.skill.syms_xz={
                    trigger:{player:"dieBegin",},
                    forced:true,
                    filter:function (event,player){return player!=game.zhu;},
                    content:function (){
                    'step 0'
        	         if(player==game.zhu.previous)game.zhu.addSkill('syms_djxz');	
                     if(player==game.zhu.previous)game.zhu.addSkill('syms_djxz2');
                    'step 1'
                     if(player==game.zhu.next)game.zhu.addSkill('syms_xfxz');	
                     if(player==game.zhu.next)game.zhu.addSkill('syms_xfxz2');
                    'step 2'
                     if(player==game.zhu.previousSeat.previous)game.zhu.addSkill('syms_zjxz');	
                     if(player==game.zhu.previousSeat.previous)game.zhu.addSkill('syms_zjxz2');
                    }}
                    lib.translate.syms_cc='重铸';
                    lib.translate.syms_djxz='休整';
                    lib.translate.syms_xfxz='休整';
                    lib.translate.syms_zjxz='休整';
                    lib.skill.syms_cc={
                enable:'phaseUse',
				filter:function(event,player){
					return player.num('h',{subtype:'equip1'})>0;
				},
				filterCard:{subtype:'equip1'},
				prepare:function(cards,player){
					player.$throw(cards,1000);
				},
				discard:false,
				delay:0.5,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					for(var i=0;i<cards.length;i++){
						ui.discardPile.appendChild(cards[i]);
					}
				},
				ai:{
					order:3.5,
					result:{
						player:1
					}
				}   
                    }
                    
                    lib.skill.syms_cz={
                    trigger:{global:"dieBegin"},
                    forced:true,                    
                    filter:function(event,player){return player!=event.player&&event.player.identity=='fan'},
                    content:function(){
                        'step 0'
                        player.draw();
                    }
                    };
                    lib.skill.syms_th={
                      trigger:{
                      global:"phaseEnd",},
                      forced:true,
                      filter:function (event,player){ return player!=event.player&&event.player!=player.previous},
                      content:function (){   
                          'setp 0'
                          player.insertPhase();
                      }
                    };
                    game.saveConfig('player_number','4','identity');	     
                    game.saveConfig('identity_mode','normal','identity'); 
                    lib.config.mode_config.identity.enhance_zhu = false;
		            lib.config.mode_config.identity.special_identity = true;
		         	lib.config.mode_config.identity.double_character = false;
		         	lib.config.mode_config.identity.free_choose = false;
			        lib.config.mode_config.identity.change_choice = true;
		          	lib.config.mode_config.identity.change_identity = true;
		        	lib.config.mode_config.identity.change_card = 'twice';
                     		
                  }
            }}}
    /*……………………………………………………………………群雄逐鹿……………………………………………………………………………*/
             if(config.qunxiongzhulu){
             if ( lib.brawl ) {                                                            									               
lib.brawl.qunxiongzhulu = {
            name:'群雄逐鹿',
            mode:'identity',    
            intro:['<font color=#FF0>游戏人数</font>：'+config.youxirenshu2+'人',                   
                   '<font color=#FF0>当前将池</font>：'+config.jiangchi+'',                   
                   '<font color=#FF0>游戏特色</font>：局势变化多端，考验玩法 ',
                   '<font color=#FF0>规则简介</font>：分为天子、诸侯、叛贼、辅臣，天子需运筹帷幄，诸侯需消灭其他势力，辅臣需协助天子，叛贼则推翻汉王朝 ',
                   "<font color=#FF0>简单介绍</font>：如下，更多请看扩展页面",
                   "<font color=#FF0>一股清流</font>：辅臣第一次击杀触发，天子摸牌一张，辅臣得技【特权】",
                   "<font color=#FF0>势力兼并</font>：诸侯第一次击杀触发，得技【特权】",
                   "<font color=#FF0>郡县沦陷</font>：叛贼第一次击杀触发，所有叛贼摸牌一张，天子弃牌",
                   '<font color=#FF0>胜负简介</font>：<font color=#FF0>一统天下</font>：天子消灭所有敌人，<font color=#FF0>更朝换代</font>：有一诸侯最终胜利，<font color=#FF0>推翻统治</font>：叛贼击杀天子， 注：暂未加入这些动画',
                   '<font color=#FF0>专属牌堆</font>：已加入，持续更新中',
                   '<font color=#FF0>特殊人物</font>：暂待更新',                                                                                                                                   						
                  ],
            content:{                              
               
                chooseCharacter:function(){
                              if(config.jiangchi=="神将"){
                                  if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterSJ.randomSort();		
                                var num = game.me==game.zhu?1:1;                              
								var list = [];
                                list = list.concat(characterSJ.randomRemove(num));
								return list;             
                              };
                              if(config.jiangchi=="标准包"){
                               if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterbzb.randomSort();		
                                var num = game.me==game.zhu?5:4;                              
								var list = [];
                                list = list.concat(characterbzb.randomRemove(num));
								return list;    };         
                               if(config.jiangchi=='武庙'){
                                   if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterwm.randomSort();		
                                var num = game.me==game.zhu?5:3;                              
								var list = [];
                                list = list.concat(characterwm.randomRemove(num));
								return list;             
                               };                           
                              if(config.jiangchi=='诸子百家'){
                                  if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterzzbj.randomSort();		
                                var num = game.me==game.zhu?32:30;                              
								var list = [];
                                list = list.concat(characterzzbj.randomRemove(num));
								return list;};
                              if(config.jiangchi=='扩展综合'){
								if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterList4.randomSort();		
                                var num = game.me==game.zhu?80:70;
								var list = [];
                                list = list.concat(characterList4.randomRemove(num));
								return list;};        
                            
                              if(config.jiangchi=='列女传'){
								if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterList2.randomSort();		
                                var num = game.me==game.zhu?15:10;
								var list = [];
                                list = list.concat(characterList2.randomRemove(num));
								return list;};
                                  if(config.jiangchi=='三国标准包'){
                                    	if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();		
                                var num = game.me==game.zhu?30:25;
								var list = [];
                                list = list.concat(characterList.randomRemove(num));
								return list;};     
							},
                chooseCharacterAi:function(player){
                              if(config.jiangchi=="神将"){
                                  if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterSJ.randomSort();
								player.init(characterSJ.randomRemove());
                              };
                              if(config.jiangchi=='标准包'){
                                  if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterbzb.randomSort();
								player.init(characterbzb.randomRemove());
                              };
                              if(config.jiangchi=='武庙'){
                                  if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterwm.randomSort();
								player.init(characterwm.randomRemove());
                              };
                              if(config.jiangchi=='诸子百家'){
                              if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterzzbj.randomSort();
								player.init(characterzzbj.randomRemove());    
                              };
                              if(config.jiangchi=='扩展综合'){
								if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterList4.randomSort();
								player.init(characterList4.randomRemove());
                              };                            
                              
                              if(config.jiangchi=='列女传'){
								if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterList2.randomSort();
								player.init(characterList2.randomRemove());
                              };
                          if(config.jiangchi=='三国标准包'){
                                  if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();
								player.init(characterList.randomRemove());
                              }
							},
                
            
                    cardPile:function(){
								return cardPack2;
							},      
                gameStart:function(){
                    'step 0'
       game.swapSeat=function(all){};
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/KZSM.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/sskzsm.jpg");
                    'step 1'
                   if(game.me.identity!='zhu')game.zhu.maxHp++;
                   if(game.me.idenyity!='zhu')game.zhu.hp++; 
                    game.me.maxHp++;
                    game.me.hp++;
                    'step 2'
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].identity=='zhu') continue;
						game.players[i].identity='nei';	
                        game.players[i].awakenSkill('bz_yisha');                         
                    };
                    game.zhu.addSkill('QXZL_CF')
                    game.zhu.awakenSkill('bz_yisha')
                   
                    
                    'step 3'
                  lib.translate.zhu = '天子';
	              lib.translate.nei = '诸侯';
                  lib.translate.zhong='辅臣';
                  game.showIdentity();  
                    'step 4'
                  for(var i=0;i<game.players.length;i++){
                      game.players[i].addSkill('QXZL_PD');
                    }
                  
                  
                  
                }},
           init:function(){  
        /*----------------技能页-----------------*/
               lib.skill.QXZL_PD={
               forced:true,
              trigger:{
                    global:"phaseBegin",
                },
              filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
                    'step 0'
                    if(player.identity=='nei')player.addSkill('ZH_JB');
                    if(player.identity=='nei')player.addSkill('zl_sljb');
                    if(player.identity=='zhong')player.addSkill('zl_ygql');
                    if(player.identity=='nei')player.addSkill('ZH_PH');
                    if(player.identity=='zhu')player.addSkill('TZ_FF');                    
                    'step 1'
                    player.awakenSkill('QXZL_PD')
                }
           }
          
               
           lib.skill.PZ_XY={
                mark:true,
                intro:{content:"声势浩大"},
                trigger:{
        player:"phaseDiscardBefore",
    },
    filter:function (event,player){
        return player.num('h')>player.hp;
    },
    content:function (){
    'step 0'
    player.chooseTarget(get.prompt('PZ_XY'),function(card,player,target){
            return target!=player&&target.identity=='fan';
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('PZ_XY',result.targets);
            result.targets[0].gainPlayerCard(player,player.num('h')-player.hp,'h',true)
        }}             
           }
           lib.skill.ZH_JB={
               mark:true,
               forced:true,
               intro:{content:"诸侯纷争"},
               trigger:{
                    source:"dieBegin",
                },
               filter:function (event,player){
               return event.player.num('hej')>0
               },
                content:function (){
                    'step 0'
                    player.gainPlayerCard(trigger.player,999,'hej',true)
                    'step 1'
                    player.maxHp++;
                    
           }}
           lib.skill.TZ_FF={
               mark:true,
               forced:true,
               intro:{content:"莫非王臣"},
               trigger:{
                    source:"dieBegin",
                },
               filter:function (event,player){
               return event.player.identity!='zhong'&&event.player.group==player.group;
            
       
               },
                content:function (){
                    'step 0'
        trigger.untrigger();
        trigger.finish();
        trigger.player.chooseToDiscard(999,'hej',true)
        trigger.player.recover(2);
        trigger.player.draw(3);
        trigger.player.removeSkill('ZH_JB');
        trigger.player.addSkill('FC_TQ1') 
        trigger.player.removeSkill('ZH_PH');
        trigger.player.removeSkill('zl_sljb');
        trigger.player.removeSkill('zl_yfbz');
        trigger.player.removeSkill('zl_txzb');
        trigger.player.removeSkill('ZH_TQ1');
        trigger.player.removeSkill('ZH_TQ2');
        trigger.player.removeSkill('zl_jxlx');
        trigger.player.removeSkill('zl_txzd');
        trigger.player.removeSkill('zl_qsjj');
        trigger.player.addSkill('zl_ygql');
                    'step 1'
                    trigger.player.identity='zhong';
                    game.showIdentity();
                   
           }
           }
           lib.skill.FC_YW={
           mark:true,
           intro:{content:"笃悠之臣"},
           forced:true,
           trigger:{
                    player:"phaseBegin",
                },
           filter:function (event,player){
           return player.hp>0;
               },
           content:function (){
                      'step 0'
             if(game.players.length>5){if(player.maxHp>player.hp)player.recover();
                if(player.maxHp==player.hp)player.maxHp++;}else{
                    player.draw(player.maxHp-player.hp);
                }
           },} 
          
            lib.translate.PZ_XY='响应',
            lib.translate.PZ_XY_info='<font color=orange>叛贼技</font> ：你的回合结束时，可以令一名其他叛贼获得你多余的手牌',
            lib.translate.ZH_JB='兼并',
            lib.translate.ZH_JB_info='<font color=orange>诸侯技</font>、 <font color=red>锁定技</font> ：当你杀死辅臣或者诸侯时，你获得其所有牌并上升一点体力上限',
            lib.translate.TZ_FF='分封',
            lib.translate.TZ_FF_info='<font color=orange>天子技</font>、 <font color=red>锁定技</font> ：当你杀死一名角色时，若其势力与你一致，防止其死亡，再将其身份转为“辅臣”，并且令之回血两点以及摸牌三张（其先弃置所有牌）', 
            lib.translate.FC_YW='雅望',
            lib.translate.FC_YW_info='<font color=orange>辅臣技</font>、 <font color=red>锁定技</font> ：你的回合开始时，若游戏人数大于5，则若你已受伤，你回血一点，若你未受伤，上升一点体力上限，若游戏人数不大于5，你摸取等同于已损失体力值的牌。',                                                                              
            lib.storage.mode = "qunxiongzhulu";
            game.saveConfig('identity_mode','normal','identity');
            if(config.youxirenshu=='all'){
                game.saveConfig('player_number',config.youxirenshu2,'identity');
                if(config.youxirenshu2=='2')lib.config.mode_config.identity.identity.push(['zhu','nei']);
                if(config.youxirenshu2=='3')lib.config.mode_config.identity.identity.push(['zhu','nei','fan']);
                if(config.youxirenshu2=='4')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','zhong']);
                if(config.youxirenshu2=='5')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','fan','zhong']);
                if(config.youxirenshu2=='6')lib.config.mode_config.identity.identity.push(['zhu','nei','zhong','fan','fan','fan']);
                if(config.youxirenshu2=='7')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','fan','fan','zhong','zhong']);
                if(config.youxirenshu2=='8') lib.config.mode_config.identity.identity.push(['zhu','nei','zhong','zhong','fan','fan','fan','fan']);            
            }else{              
            game.saveConfig('player_number','8','identity');}	    
            lib.config.mode_config.identity.enhance_zhu = false;
		    lib.config.mode_config.identity.special_identity = true;
			lib.config.mode_config.identity.double_character = false;
			lib.config.mode_config.identity.free_choose = false;
			lib.config.mode_config.identity.change_choice = true;
			lib.config.mode_config.identity.change_identity = true;
			lib.config.mode_config.identity.change_card = 'twice';
      /*————————————————————————卡牌页——————————————————————————*/
            game.addCard('zl_jinjun',{           
            enable:true,
            type:'trick',
            filter:function (event,player){return player.num('h')>1;},
            filterTarget:function (card,player,target){return target.num('he')>0&&target!=player;},
            content:function(){
                'step 0'
              player.chooseToDiscard('h',true);
                'step 1'
              player.discardPlayerCard(1,'he',target,true)},
        ai:{
        order:9,
        value:[8,3],
        useful:[6,3],
        result:{target:-2.5,},
        tag:{recover:1,},},},{ translate:'进军',
             description:'在你的手牌数大于1时使用，弃置一张手牌再弃置一名其他角色的一张牌',});
          game.addCard('zl_zhengbing',{           
            enable:true,
            type:'basic',
            selectTarget:-1,
            modTarget:true,
            filterTarget:function (card,player,target){return target==player;},
            content:function(){
                'step 0'
             player.gain(game.createCard('sha'));},
        ai:{
        order:9,
        value:[8,3],
        useful:[6,3],
        result:{player:2.5,target:2.5,},
        tag:{recover:1,},},},{ translate:'征兵',
             description:'使用后获得一张【杀】',});
             game.addCard('zl_zhengbian',{           
            enable:true,
            type:"trick",
            selectTarget:-1,
            modTarget:true,
            filterTarget:function (card,player,target){return target==player;},
            content:function(){
                'step 0'
                player.chooseToDiscard(2,'h').ai=function(card){return 6-ai.get.value(card);}
                'step 1'
                if(result.bool){player.draw(2)}else{event.finish();}},
        ai:{
        order:4,
        value:[8,3],
        useful:[6,3],
        result:{player:2.5,target:1.5,},
        tag:{recover:1,},},},{ translate:'整编',
             description:'使用后弃置两张牌，再摸两张牌',});   
            game.addCard('zl_dazhengbian',{           
            enable:true,
            type:'trick',
            selectTarget:-1,
            modTarget:true,
            filterTarget:function (card,player,target){return target==player;},
            content:function(){
                'step 0'
             player.chooseToDiscard([1,3],'h').ai=function(card){return 6-ai.get.value(card);}
                'step 1'               
            if(result.bool){var num=result.cards.length;player.draw(num)}else{event.finish();}},
        ai:{
        order:4,
        value:[8,3],
        useful:[6,3],
        result:{player:2.5,target:2.5,},
        tag:{recover:1,},},},{ translate:'大整编',
             description:'弃置一到三张手牌，再摸取等量的牌',});
            }}}}
    /*……………………………………………………………………标准模式…………………………………………………………………………*/
             if(config.biaozhunmoshi){
             if ( lib.brawl ) {                                                            									               
lib.brawl.biaozhunmoshi = {
            name:'标准模式',
            mode:'identity',   
            intro:['<font color=#FF0>游戏人数</font> ：'+config.youxirenshu2+'人',                  
                   '<font color=#FF0>游戏特色</font> ：存在揭示游戏情报或者体现当前事件的动画（持续更新中），以增加趣味和策略性',
                   '<font color=#FF0>模式介绍</font> ：目的在于为《三国标准包》提供一个良好的游戏环境，且也是为了还原标准的三国杀的趣味，并在此基础上，进行了一些创新（内容、规则等并未改动）',
                   '将池：《三国标准包》内角色（持续更新中）。注：无法自由选将',
                   '牌堆：《标准包》牌堆。',
                   '人物专属牌堆：诸葛亮——【隆中对】,曹操——【招贤令】,关羽——【亢龙有悔】',                                                      
                
						
                  ],
            content:{
                cardPile:function(){
								return cardPack;
							},
                chooseCharacter:function(){
								if(game.me==game.zhu)
									_status.event.trigger('init');
								else if(game.me!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();		
                                var num = game.me==game.zhu?25:20;                              
								var list = [];
                                list = list.concat(characterList.randomRemove(num));
								return list;             
							},
                chooseCharacterAi:function(player){
								if(player==game.zhu)
									_status.event.trigger('init');
								else if(player!=game.zhu)
									_status.event.trigger('init2');
								characterList.randomSort();
								player.init(characterList.randomRemove());
							},
                gameStart:function(){
                    'step 0'
                    if(game.me.identity!='zhu')game.zhu.maxHp++;
                    if(game.me.idenyity!='zhu')game.zhu.hp++;
                    'step 1'
                    for(var i=0;i<game.players.length;i++){
                        game.players[i].addSkill('BZMS_JUEDOU');
                        game.players[i].addSkill('BZMS_TAO');
                        game.players[i].addSkill('BZMS_BING1')
                        game.players[i].addSkill('BZMS_BING2')
                        game.players[i].addSkill('BZMS_FANG1')
                        game.players[i].addSkill('BZMS_FANG2')
                        game.players[i].addSkill('BZMS_FANG3')
                        game.players[i].addSkill('BZMS_FANG4')
                        game.players[i].addSkill('BZMS_BING3')
                        game.players[i].addSkill('BZMS_MOU1')
                        game.players[i].addSkill('BZMS_MOU2')
                        game.players[i].addTempSkill('BZMS_ZSKP');                                                                                         
                       }
                    'step 2'                    
                }},
            init:function(){    
                      lib.storage.mode = "biaozhunmoshi";		                            
	        game.saveConfig('identity_mode','normal','identity');
            if(config.youxirenshu=='all'){
                game.saveConfig('player_number',config.youxirenshu2,'identity');
                if(config.youxirenshu2=='2')lib.config.mode_config.identity.identity.push(['zhu','nei']);
                if(config.youxirenshu2=='3')lib.config.mode_config.identity.identity.push(['zhu','nei','fan']);
                if(config.youxirenshu2=='4')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','zhong']);
                if(config.youxirenshu2=='5')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','fan','zhong']);
                if(config.youxirenshu2=='6')lib.config.mode_config.identity.identity.push(['zhu','nei','zhong','fan','fan','fan']);
                if(config.youxirenshu2=='7')lib.config.mode_config.identity.identity.push(['zhu','nei','fan','fan','fan','zhong','zhong']);
                if(config.youxirenshu2=='8') lib.config.mode_config.identity.identity.push(['zhu','nei','zhong','zhong','fan','fan','fan','fan']);
                
            }else{              
            game.saveConfig('player_number','8','identity');}
	    
            lib.config.mode_config.identity.enhance_zhu = false;
		    lib.config.mode_config.identity.special_identity = false;
			lib.config.mode_config.identity.double_character = false;
			lib.config.mode_config.identity.free_choose = false;
			lib.config.mode_config.identity.change_choice = false;
			lib.config.mode_config.identity.change_identity = false;
			lib.config.mode_config.identity.change_card = 'twice';  
            game.addCard('bz_kanglongyouhui',{
            fullskin:true,
            enable:true,
            type:'trick',
            filterTarget:function (card,player,target){
                return target.num('h')>4&&target!=player;           
            },
            content:function(){
                'step 0'
              target.chooseToDiscard('h',true);
                'step 1'
              target.skip('phaseDraw')                      
            }, ai:{
        order:8,
        value:[8,3],
        useful:[6,3],
        result:{
            target:function (player,target){                
                var num=target.num('h');
                if(num<4) return -2;               
                if(target.hp<3&num<4) return -2.5;
                return -2;
            },
        },
        tag:{
            recover:1,
        },
    },
    fullimage:true,
        },{
            translate:'亢龙有悔',
            description:'出牌阶段，对一名手牌数大于4的其他角色使用，令之先弃置一张手牌再跳过其下个摸牌阶段',
            number:parseInt(config.bz_kanglongyouhui)
    });
            game.addCard('bz_longzhongdui',{
            fullskin:true,
            enable:true,
            type:'trick',
            filterTarget:function (card,player,target){
                return target.num('he')>0;
            },
            selectTarget:3,
            multitarget:true,
            targetprompt:["得牌","得牌弃牌","得牌弃牌"],
            content:function(){       
                'step 0'
               targets[0].gain(game.createCard('wuzhong'));   
                'step 1'
               targets[1].gainPlayerCard(targets[2],1,'he',true);  
                'step 2'
               targets[2].gainPlayerCard(targets[1],1,'he',true);  
                'step 3'
               targets[1].chooseToDiscard(1,'h',true);
               targets[2].chooseToDiscard(1,'h',true);         
                'step 4'
               event.finish();                            
            }, ai:{
        order:9,
        value:[8,3],
        useful:[6,3],
        result:{
            targets:function (player,targets){               
                var num=targets[0].num('h');
                if(num==5) return 2;
                if(num==4) return 2;
                if(targets[0].hp<3) return 2.5;
                return 2;
            },
        },
        tag:{
            recover:1,
        },
    },
    fullimage:true,
        },{
            translate:'隆中对',
            description:'选择三名均有牌的角色，令第一名获得【无中生有】，第二名获得第三名的一张牌，然后第三名获得第二名一张牌再由他们各自弃置一张牌，，',
            number:parseInt(config.bz_longzhongdui)
        });
            game.addCard('bz_zhaoxianling',{
            fullskin:true,
            enable:true,
            type:'trick',
            filterTarget:true,
            content:function(){
                'step 0'
               target.draw();
                'step 1'
               player.useCard({name:'wugu'},game.players);
                
            },                                                       
                 ai:{
        order:4,
        value:[8,3],
        useful:[6,3],
        result:{
            target:function (player,target){
                var eff=ai.get.recoverEffect(target,player,target);
                if(eff<=0) return 0;
                var num=target.maxHp-target.num('h');
                if(num<1) return 0;
                if(num==1) return 1;
                if(target.num('h')<2) return 2.5;
                return 2;
            },
        },
        tag:{
            recover:1,
        },
    },
    fullimage:true,
        },{
            translate:'招贤令',
            description:'使用后，指定角色摸取一张牌并视为你使用了一张【五谷丰登】',
            number:parseInt(config.bz_zhaoxianling)
    });
            }}}}
          
},precontent:function (){
    
  
  
},help:{},config:{"jiangchi":{"name":"模式将池","init":"三国标准包","item":{"神将":"神将","标准包":"标准包","武庙":"武庙","三国标准包":"三国标准包","扩展综合":"扩展综合","列女传":"列女传","诸子百家":"诸子百家"}},"youxirenshu2":{"name":"人数设定","init":"8","item":{"2":"2人","3":"3人","4":"4人","5":"5人","6":"6人","7":"7人","8":"8人"}},"youxirenshu":{"name":"模式人数设定","init":"all","item":{"bol":"关闭","all":"开启"}},"sanyingmoshi":{"name":"三英模式","init":true},"changbanpo":{"name":"长坂坡模式","init":true},"qunxiongzhulu":{"name":"群雄逐鹿","init":true},"tips1":{"name":"<span style=\"font-size:15.6px;font-weight:600\"><font color=#FF0>作者</font>：天气亏  <font color=#FF0>版本号</font>：v.1.6   <font color=#FF0>更新日期</font>：2017年9月9日  </span><span style=\"font-size:14px\"><li>设置游戏人数时，会连接本来游戏的身份局的人数<li>若有疑问等点击此处：<div onclick=window.open('http://tieba.baidu.com/p/5286202985?share=9105&fr=share&see_lz=0')><font color=#FF0>传送至贴吧</font> </div><li> 配套文件（扩展、皮肤等）：<div onclick=window.open('http://pan.baidu.com/s/1pLly86R')><font color=#FF0>前往下载</font> </div><li>皮肤需要自行安装至skin，已有配套扩展者最好更新一下，否则可能版本不同<li>群雄逐鹿规则：诸侯有“势力兼并”、“一方霸主”、“天下至霸”三个进阶段。辅臣有“一股清流”、“匡扶汉室”、“一匡天下”三个进阶段。叛贼有“郡县沦陷”、“天下震动”、“气数将尽”三个进阶段<li>其次，诸侯有【挟汉】，辅臣有【丞相】，叛贼有【贼首】、【内乱】<li>三足鼎立、南北朝等暂未加入群雄逐鹿<li>群雄逐鹿将会不断调整更新<li>由于时间问题，以后更新会非常慢，如有觉得应先解决的问题或重要的，你们可以传送至贴吧，进行留言，我会优先处理<br></span>","clear":true,"nopointer":true},"biaozhunmoshi":{"name":"标准模式","init":true},"三国标准包":{"name":"编辑此扩展","clear":true}},package:{
    character:{
        connect:true,
        character:{
            "dw_bz_zhouyu":["male","wu",3,["DW_FENGYA","DW_YEYAN"],["des:<font color=red>美周郎</font> <br>级别：S级<br>星级：★★☆<br>定位：反手 威压<br>特点：附带火攻能力"]],
            "dw_bz_sunquan":["male","wu",4,["DW_SANSI","DW_ZHIHENG","jiuyuan"],["zhu","des:<font color=red>江东雄君</font> <br>级别：S级<br>星级：★★<br>定位：换牌 自愈<br>特点：体力值低时，有自愈能力，但攻击性略低，适合当主公或内奸"]],
            "dw_bz_sunce":["male","wu",3,["DW_XBW","DW_SAODANG"],["zhu","des:<font color=red>江东小霸王</font> <br>级别：A+级<br>星级：★★<br>定位：攻坚<br>特点：攻中带守"]],
            "dw_bz_lusu":["male","wu",3,["DW_JIEMING","DW_YUANLV"],["des:<font color=red>竭虑的忠臣</font> <br>级别：A+级<br>星级：★★<br>定位：辅助<br>特点：能为队友提供额外手牌收入"]],
            "dw_bz_luxun":["male","wu",3,["DW_QIANXUN","DW_ZHIDI"],["des:<font color=red>书生意气</font> <br>级别：S级<br>星级：★★☆<br>定位：反手 迂回<br>特点：生存力高，且带有攻击性"]],
            "dw_bz_daqiao":["female","wu",3,["DW_GUOSE","DW_LIULI"],["des:<font color=red>矜持的美人</font> <br>级别：B+级<br>星级：★☆<br>定位：控制 减距<br>特点：稳稳的【兵粮寸断】，但防守距离亦减少"]],
            "dw_bz_xiaoqiao":["female","wu",3,["DW_TIANXIANG","DW_HONGYAN"],["des:<font color=red>天之芳馨</font> <br>级别：B+级<br>星级：★★<br>定位：控制<br>特点：对男性可以双控制"]],
            "cw_bz_caocao":["male","wei",3,["CW_JIANXIONG","CW_NENGCHEN","hujia"],["zhu","des:<font color=red>乱世奸雄</font> <br>级别：S级<br>星级：★★<br>定位：争掠<br>特点：可以反压和正压敌人"]],
            "cw_bz_xiahoudun":["male","wei",4,["CW_GANGLIE"],["des:<font color=red>独眼狼</font> <br>级别：B级<br>星级：★☆<br>定位：反手<br>特点：让敌人弃置，但得慎用"]],
            "cw_bz_caoren":["male","wei",4,["CW_JUSHOU","CW_QIANGGONG"],["des:<font color=red>大魏上将</font><br>级别：B+级<br>星级：★★<br>定位：攻坚<br>特点：以牌为守，以体为攻 "]],
            "cw_bz_caiyan":["female","wei",3,["CW_BEIGE","CW_DUANCHANG"],["des:<font color=red>异乡孤魂</font><br>级别：A级<br>星级：★★<br>定位：反伤 控制<br>适当掉血，团队得益 "]],
            "cw_bz_jiaxu":["male","wei",3,["CW_YINSHEN","CW_DUMIE"],["des:<font color=red>隐身的毒士</font><br>级别：S级<br>星级：★★<br>定位：弱化 强化<br>特点：能有效令团队抑制对面牌少者，但条件较为苛刻 "]],
            "cw_bz_zhenfu":["female","wei",3,["CW_LUOSHEN"],["des:<font color=red>洛神</font><br>级别：B+级<br>星级：★★<br>定位：弱化<br>特点：全数弱化敌队男性 "]],
            "cw_bz_xunyu":["male","wei",4,["CW_JIEMING","CW_WANGZUO"],["des:<font color=red>辅汉大臣</font><br>级别：S级<br>星级：★★☆<br>定位：辅助 攻势<br>特点：最强辅助 "]],
            "sh_bz_guanyu":["male","shu",3,["SH_WUSHENG","SH_TUODAO"],["des:<font color=red>武圣</font> <br>级别：S级<br>星级：★★☆<br>定位：暴击<br>特点：【酒】圣"]],
            "sh_bz_xushu":["male","shu",4,["SH_JIJIAN","SH_XIAKEXING"],["des:<font color=red>至孝的游子</font> <br>级别：A+级<br>星级：★★☆<br>定位：弱化 攻辅<br>特点：可以通过弃牌弱化敌人，且手牌上限恒等于体力上限"]],
            "sh_bz_pangtong":["male","shu",3,["SH_FENGCHU","SH_HAOYAN"],["des:<font color=red>凤雏先生</font> <br>级别：S级<br>星级：★★<br>定位：辅助 豪杰 协愈<br>特点：豪赌之后，可以由队友为你刷牌和回血"]],
            "sh_bz_zhangfei":["male","shu",4,["SH_PAOXIAO","SH_YISHI"],["des:<font color=red>万人敌</font> <br>级别：S级<br>星级：★★☆<br>定位：猛将 弱化<br>特点：可以通过弃牌弱化敌人对你的【杀】的防御力"]],
            "sh_bz_liubei":["male","shu",4,["SH_XIAOXIONG","jijiang"],["zhu","des:<font color=red>潜渊之龙</font> <br>级别：S级<br>星级：★★<br>定位：弱化 除弊<br>特点：拥有除去判定牌的能力"]],
            "sh_bz_zhaoyun":["male","shu",4,["SH_LONGDAN","SH_DANJI"],["des:<font color=red>常胜将军</font> <br>级别：S级<br>星级：★★☆<br>定位：攻坚 单骑<br>特点：【杀】必中，但无法【闪】，需要调控好"]],
            "sh_bz_huangyueying":["female","shu",3,["SH_GUIYIN","SH_QICAI"],["des:<font color=red>归隐的杰女</font> <br>级别：S级<br>星级：★★☆<br>定位：场外 收割<br>特点：观战、参战皆可，且强效有力，但后劲不足，需要谨慎，否则需数回合恢复元气"]],
            "qx_bz_yuanshao":["male","qun",4,["QX_XURONG","QX_SULI","QX_YUANMEN"],["zhu","des:<font color=red>四世三公</font> <br>级别：B级<br>星级：★☆<br>定位：协助 威压<br>特点：需慎用技能，但效果不错"]],
            "qx_bz_lvbu":["male","qun",4,["QX_WUSHUANG"],["des:<font color=red>人中吕布</font> <br>级别：S级<br>星级：★★☆<br>定位：猛将<br>特点：有加强版【无双】的能力"]],
            "qx_bz_diaochan":["female","qun",3,["QX_BIYUE","QX_LIJIAN"],["des:<font color=red>闭月</font> <br>级别：A+级<br>星级：★★☆<br>定位：损势 去伤<br>特点：保留【离间】，死去不视为被击杀"]],
            "qx_bz_dongzhuo":["male","qun",4,["QX_BAOZHENG"],["zhu","des:<font color=red>噬血魔王</font><br>级别：A级<br>星级：★★<br>定位：弱化 刷牌<br>特点：能刷大量的牌，但需谨慎 "]],
            "qx_bz_zhangjiao":["male","qun",3,["QX_HUANGTIAN","QX_LUOLEI"],["zhu","des:<font color=red>广贤良师</font> <br>级别：S级<br>星级：★★<br>定位：反手 迂回<br>特点：牌可当【闪】，【闪】连技能"]],
            "qx_bz_zhaoyun":["male","qun",4,["QX_LONGQIANG","QX_YIYAN"],["des:<font color=red>少年将军</font> <br>级别：B+级<br>星级：★★<br>定位：攻坚 辅助<br>特点：双重攻击"]],
            "qx_bz_huangshuo":["female","qun",3,["QX_QIAOSI","QX_BOCAI"],["des:<font color=red>奇博士</font> <br>级别：A级<br>星级：★★<br>定位：器神<br>特点：装备生产，装备重铸"]],
            "qx_bz_gongsunzan":["male","qun",4,["QX_YICONG"],["zhu","des:<font color=red>白马将军</font> <br>级别：B级<br>星级：★☆<br>定位：沉稳<br>特点：有一定的被动攻击性和防御性，算得上攻守兼备"]],
            "cw_bz_zhangliao":["male","wei",4,["CW_TUXI"],["des:<font color=red>威震逍遥</font> <br>级别：A+级<br>星级：★★<br>定位：收割<br>特点：对低牌数角色的压制性很高"]],
            "sh_bz_machao":["male","shu",4,["SH_JICHI","mashu"],["des:<font color=red>锦马超</font> <br>级别：S级<br>星级：★★<br>定位：猛将<br>特点：【马术】是关键"]],
            "dw_bz_ganning":["male","wu",4,["DW_JIEXI","DW_SHUIDAO"],["des:<font color=red>水上锦帆</font><br>级别：A级<br>星级：★★<br>定位：弱化<br>特点：操作性高 "]],
            "sh_bz_zhugeliang":["male","shu",3,["SH_ZHISHENG","SH_DONGCHA","SH_WEIWO"],["des:<font color=red>军师将军</font><br>级别：S级<br>星级：★★☆<br>定位：沉稳 均衡 免疫<br>特点：攻守兼备，其中，以【洞察】为主防 "]],
            "dw_bz_sunjian":["male","wu",4,["DW_CHUANGZHEN"],["zhu","des:<font color=red>江东英魂</font><br>级别：B+级<br>星级：★★<br>定位：攻坚<br>特点：能有效实施打压 "]],
            "cw_bz_zhangchunhua":["female","wei",3,["CW_JUEQING","CW_MIEKOU"],["des:<font color=red>绝情才女</font> <br>级别：B级<br>星级：★★<br>定位：收割 流失<br>特点：免疫伤害带来的反手技能"]],
            "qx_bz_liubiao":["male","qun",4,["QX_ZISHOU"],["zhu","des:<font color=red>自守之君</font><br>级别：B级 <br>星级：★★<br>定位：留牌<br>特点：有时候会有不弱的爆发"]],
            "dw_bz_xusheng":["male","wu",3,["DW_POJUN"],["des:<font color=red>奋先之将</font><br>级别：B级<br>星级：★☆<br>定位：猛将 攻坚<br>特点：增加优势 "]],
            "cw_bz_guojia":["male","wei",3,["CW_GUICAI","CW_BUJI","CW_QIZUO"],["des:<font color=red>早逝先知</font><br>级别：S级<br>星级：★★☆<br>定位：输出<br>特点：【不羁】充分配合【鬼才】 "]],
            "dw_bz_dinfeng":["male","wu",3,["DW_ROUBO"],["des:<font color=red>轻装老军</font> <br>级别：B级<br>星级：★☆<br>定位：攻坚<br>特点：可无距离短兵交战，但需谨慎"]],
            "dw_bz_zhangzhao":["male","wu",3,["DW_CHAOCHEN","DW_GUZHENG"],["des:<font color=red>江东肱骨</font> <br>级别：B+级<br>星级：★★<br>定位：辅助<br>特点：增加团队的留牌数"]],
            "qx_bz_guanning":["male","qun",3,["QX_DANBO","QX_DUANXI"],["zhu","des:<font color=red>断席清心</font><br>级别：B-级<br>星级：★☆<br>定位：反手 迂回<br>特点：动力源成为【杀】的目标是"]],
            "sh_bz_fazheng":["male","shu",3,["SH_ENYUAN"],["des:<font color=red>恩怨必报</font><br>级别：A级<br>星级：★★<br>定位：反手 协助<br>特点：恩怨必报 "]],
            "sh_bz_huangzhong":["male","shu",4,["SH_JIGONG"],["des:<font color=red>神射手</font> <br>级别：S级<br>星级：★★☆<br>定位：输出 置办<br>特点：无距离压力"]],
            "sh_bz_weiyan":["male","shu",4,["SH_KUANGGU"],["des:<font color=red>狂骨镇将</font> <br>级别：A+级<br>星级：★★<br>定位：猛将 攻坚<br>特点：压制流"]],
            "cw_bz_chengyu":["male","wei",3,["CW_DANMOU","CW_WEICHENG","CW_HUALAO"],["des:<font color=red>心定之谋士</font><br>级别：A级<br>星级：★★<br>定位：弱化 逆流<br> 特点：【画牢】随配合【胆谋】，但需慎重"]],
            "cw_bz_simayi":["male","wei",3,["CW_LANGGU","CW_MIAOSUAN"],["des:<font color=red>狼顾之鬼</font> <br>级别：S级<br>星级：★★☆<br>定位：洗牌 爆发<br>特点：手牌越少，技能越强"]],
            "qx_bz_wenchou":["male","qun",3,["QX_LANGLUE"],["des:<font color=red>河北狼</font><br>级别：B级<br>星级：★☆<br>定位：猛将 掠夺<br>特点：成功的【杀】有回益和弱化 "]],
            "qx_bz_yanliang":["male","qun",4,["QX_HUBU"],["des:<font color=red>河北虎</font><br>级别：B级<br>星级：★☆<br>定位：攻坚<br>特点：没有不收益的杀 "]],
        },
        translate:{
            "dw_bz_zhouyu":"周瑜",
            "dw_bz_sunquan":"孙权",
            "dw_bz_sunce":"孙策",
            "dw_bz_lusu":"鲁肃",
            "dw_bz_luxun":"陆逊",
            "dw_bz_daqiao":"大乔",
            "dw_bz_xiaoqiao":"小乔",
            "cw_bz_caocao":"曹操",
            "cw_bz_xiahoudun":"夏侯惇",
            "cw_bz_caoren":"曹仁",
            "cw_bz_caiyan":"蔡琰",
            "cw_bz_jiaxu":"贾诩",
            "cw_bz_zhenfu":"甄姬",
            "cw_bz_xunyu":"荀彧",
            "sh_bz_guanyu":"关羽",
            "sh_bz_xushu":"徐庶",
            "sh_bz_pangtong":"庞统",
            "sh_bz_zhangfei":"张飞",
            "sh_bz_liubei":"刘备",
            "sh_bz_zhaoyun":"赵云",
            "sh_bz_huangyueying":"黄月英",
            "qx_bz_yuanshao":"袁绍",
            "qx_bz_lvbu":"吕布",
            "qx_bz_diaochan":"貂蝉",
            "qx_bz_dongzhuo":"董卓",
            "qx_bz_zhangjiao":"张角",
            "qx_bz_zhaoyun":"赵子龙",
            "qx_bz_huangshuo":"黄硕",
            "qx_bz_gongsunzan":"公孙瓒",
            "cw_bz_zhangliao":"张辽",
            "sh_bz_machao":"马超",
            "dw_bz_ganning":"甘宁",
            "sh_bz_zhugeliang":"诸葛亮",
            "dw_bz_sunjian":"孙坚",
            "cw_bz_zhangchunhua":"张春华",
            "qx_bz_liubiao":"刘表",
            "dw_bz_xusheng":"徐盛",
            "cw_bz_guojia":"郭嘉",
            "dw_bz_dinfeng":"丁奉",
            "dw_bz_zhangzhao":"张昭",
            "qx_bz_guanning":"管宁",
            "sh_bz_fazheng":"法正",
            "sh_bz_huangzhong":"黄忠",
            "sh_bz_weiyan":"魏延",
            "cw_bz_chengyu":"程昱",
            "cw_bz_simayi":"司马懿",
            "qx_bz_wenchou":"文丑",
            "qx_bz_yanliang":"颜良",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            "DW_FENGYA":{
                group:["bz_ch","bz_yisha"],
                audio:"yingzi",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        return    event.card&&event.card.name=='shan';
;  
    },
                content:function (){
        'step 0'
        player.draw();
        'step 1'
         player.chooseToUse('是否使用一张牌？');
           
                  
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "DW_YEYAN":{
                usable:1,
                audio:"yeyan",
                enable:"chooseToUse",
                filterCard:function (card){
return get.color(card)=='red';
},
                position:"he",
                viewAs:{
                    name:"huogong",
                    suit:"diamond",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":5,"name":"shan","cardid":"8578300272","clone":{"name":"shan","suit":"diamond","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":5882},"original":"h","timeout":5846}],
                },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                        order:4,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                    },
                },
            },
            "DW_SANSI":{
                group:["bz_yisha","bz_ch"],
                audio:"zhiheng",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:true,
                selectCard:[1,Infinity],
                check:function (card){
        return 6-get.value(card)
    },
                prompt:"弃置任意张手牌并摸一张牌",
                content:function (){
        player.draw();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            "DW_ZHIHENG":{
                audio:"zhiheng",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.cards&&event.cards.length>2;
    },
                content:function (){
        'step 0'
      player.draw()
        'step 1'
      if(player.hp<3)player.recover();
     
     
     
     
     
      },
                ai:{
                    threaten:1.8,
                },
            },
            "DW_XBW":{
                group:["bz_yisha","bz_ch"],
                audio:"jiang",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
;  
    },
                content:function (){
       'step 0'
        player.changeHujia(-999)
       'step 1'
        player.changeHujia();
        
      
           
                  
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "DW_SAODANG":{
                audio:"hunzi",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hujia>0;
    },
                content:function (){
        'step 0'
        player.changeHujia(-999);
        'step 1'
        player.draw();
    },
            },
            "DW_JIEMING":{
                group:["bz_yisha","bz_ch"],
                audio:"haoshi",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
     if(ai.get.attitude(player,event.player)<=0) return false;
     if(player.num('h')==1&&player.num('h','tao')>0) return false;
     if(player.num('h')==1&&player.num('h','jiu')>0) return false;
        return player.hp>1&&player.num('h')>1;
    },
                filter:function (event,player){
        return event.player!=player&&player.num('h')>0;
    },
                content:function (){
        'step 0'
    player.chooseToDiscard(1,'h',true)   
        'step 1'
    trigger.player.draw();
       
    
   
    },
                ai:{
                    result:{
                        player:-0.6,
                        target:0.5,
                    },
                },
            },
            "DW_YUANLV":{
                audio:"dimeng",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                filter:function (event,player){
        return player.num('h')<player.maxHp;
    },
                content:function (){
        if(game.players.length>4)player.draw(player.maxHp-player.num('h'));
        if(game.players.length<=4)player.draw()
    },
            },
            "DW_QIANXUN":{
                group:["bz_ch","bz_yisha"],
                audio:"reqianxun",
                enable:["chooseToRespond"],
                filterCard:true,
                viewAs:{
                    name:"shan",
                    suit:"heart",
                    number:3,
                },
                viewAsFilter:function (player){
        if(player.num('h')==0) return false;        
    },
                check:function (){return 1},
                prompt:"将一张手牌当闪打出",
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
            if(player.num('h')<1) return false;
        },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "DW_ZHIDI":{
                audio:"relianying",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        return  event.card&&event.card.name=='shan';
;  
    },
                content:function (){
        'step 0'
        game.delay(0.5);
        player.chooseTarget(get.prompt('DW_ZHIDI'),function(card,player,target){
            return target!=player&&target.num('he')>0;
         }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('DW_ZHIDI',result.targets);
            player.discardPlayerCard(result.targets[0],true,'he');
                          
        }
      
       
                  
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "DW_LIULI":{
                group:["bz_yisha","bz_ch"],
                audio:"liuli",
                enable:"phaseUse",
                usable:1,
                selectCard:2,
                filterCard:function (card){
return get.color(card)=='black';
},
                position:"h",
                prompt:"将一张黑色手牌当【兵粮寸断】使用",
                viewAs:{
                    name:"bingliang",
                    suit:"club",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"sha","cardid":"1448501251","clone":{"name":"sha","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"fixed":true,"timeout":454},"original":"h","_transform":"translateY(0px)","viewAs":"bingliang"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":9,"name":"jiu","cardid":"6644622254","clone":{"name":"jiu","suit":"spade","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":444},"timeout":423,"original":"h"}],
                },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                        order:4,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                        skip:"phaseDraw",
                    },
                },
            },
            "DW_GUOSE":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-2;
        },
                },
                group:"DW_GUOSE_1",
                subSkill:{
                    "1":{
                        mod:{
                            globalTo:function (from,to,distance){
            return distance-1;
        },
                        },
                        sub:true,
                    },
                },
            },
            "DW_HONGYAN":{
                group:["bz_yisha","bz_ch"],
                audio:"tianxiang",
                enable:"phaseUse",
                usable:1,
                selectCard:2,
                filterCard:function (card){
return get.color(card)=='red';
},
                position:"h",
                prompt:"将一张红色手牌当【乐不思蜀】使用",
                viewAs:{
                    name:"lebu",
                    suit:"diamond",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":8,"name":"shan","cardid":"8072247291","clone":{"name":"shan","suit":"heart","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":6970},"original":"h","_transform":"translateX(112px)","viewAs":"lebu","timeout":6963},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":9,"name":"tao","cardid":"5424502293","clone":{"name":"tao","suit":"heart","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":7184},"original":"h","_transform":"translateX(0px)","timeout":7160}],
                },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                        order:4,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                        skip:"phaseDraw",
                    },
                },
            },
            "DW_TIANXIANG":{
                group:"bz_yisha",
                audio:"tianxiang",
                trigger:{
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return  player.hp>0;

    },
                content:function (){
        'step 0'
       
        player.chooseTarget(get.prompt('DW_TIANXIANG'),function(card,player,target){
            return target!=player&&target.num('h')>0&&target.sex=='male';
         }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
        if(result.bool){
            player.logSkill('DW_TIANXIANG',result.targets);
            player.discardPlayerCard(result.targets[0],true,'h');
                          
        }
      
       
                  
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "CW_NENGCHEN":{
                audio:"rejianxoing",
                trigger:{
                    global:"gameStart",
                },
                frequent:true,
                filter:function (event,player){
        return player.identity!='zhu';
    },
                content:function (){
    'step 0'
    player.gainMaxHp()
    'step 1'
    player.recover();





    },
            },
            "CW_GANGLIE":{
                forced:true,
                group:["bz_yisha","bz_ch"],
                audio:"ganglie",
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
    if(ai.get.attitude(player,event.player)>0) return false;
        return player.hp>0;
    },
                filter:function (event,player){
        return player.hp>0&&event.source&&event.source.num('he')>0;
    },
                content:function (){       
        trigger.source.chooseToDiscard(2,'he',true)   
    
    },
            },
            "CW_JIANXIONG":{
                audio:"jianxiong",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0&&event.source&&event.source.num('hej')>0;
    },
                check:function (event,player){
      if(ai.get.attitude(player,event.source)>0&&event.source.num('he')<5) return false;      
    },
                content:function (){       
        player.gainPlayerCard(1,trigger.source,'hej',true)   
    
    },
                group:["CW_JIANXIONG_1","bz_yisha","bz_ch"],
                subSkill:{
                    "1":{
                        audio:"jianxiong",
                        trigger:{
                            source:"damageEnd",
                        },
                        check:function (event,player){
            if(ai.get.attitude(player,event.player)>=0) return false;
            },
                        filter:function (event,player){
        return player.hp>0&&event.player.num('hej')>0;
    },
                        content:function (){       
        player.gainPlayerCard(1,trigger.player,'hej',true)   
    
    },
                        sub:true,
                    },
                },
            },
            "CW_JUSHOU":{
                group:["bz_yisha","bz_ch"],
                audio:"jushou",
                trigger:{
                    target:"shaBegin",
                },
                filter:function (event,player){
        return player.hp>0&&player.num('h')>1;
    },
                check:function (event,player){
    if(player.num('h','shan')>0) return false;
        return player.num('h')>1;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard(2,'h',true)
        'step 1'
        trigger.untrigger();
        trigger.finish();
       




    },
            },
            "CW_QIANGGONG":{
                audio:"kuiwei",
                trigger:{
                    player:"shaMiss",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                usable:1,
                check:function (event,player){
if(player.hp<2) return false;},
                content:function (){
        'step 0'
        player.loseHp();
        'step 1'
        player.useCard({name:'sha'},trigger.target);



    },
            },
            "CW_BEIGE":{
                audio:"beige",
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
     'step 0'
        player.chooseTarget('请选择一名目标，弃置其x张牌',get.prompt('CW_BEIGE'),1,function(card,player,target){
            return target!=player&&target.num('he')>0;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('CW_BEIGE',result.targets);            
               player.discardPlayerCard(player.maxHp-player.hp,result.targets[i],'he',true) 
       
         
        };};
          
    
    
    
    
    
},
            },
            "CW_DUANCHANG":{
                group:["bz_yisha","bz_ch"],
                audio:"duanchang",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0&&event.source&&event.source.hp>0;
    },
                check:function (event,player){
    if(ai.get.attitude(player,event.source)>0) return false;},
                content:function (){       
        trigger.source.loseHp()   
    
    },
            },
            "CW_YINSHEN":{
                group:["bz_yisha","bz_ch"],
                audio:"weimu",
                enable:"phaseUse",
                usable:1,
                position:"h",
                filterCard:{
                    name:"sha",
                },
                selectCard:[1,Infinity],
                prompt:"弃置任意手中的【杀】，然后获得一层护甲",
                content:function (){
        player.changeHujia()
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            "CW_DUMIE":{
                audio:"luanwu",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hujia>0;
    },
                content:function (){
       'step 0'
        player.chooseTarget('请选择一名目标，弃置其所有手牌',get.prompt('CW_DUMIE'),1,function(card,player,target){
            return target!=player&&0<target.num('h')<4;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){
               player.logSkill('CW_DUMIE',result.targets);            
               player.discardPlayerCard(999,result.targets[i],'h',true);
               player.changeHujia(-1); 
               player.draw()
       
            }
        }
      
      
     
        
    },
            },
            "CW_LUOSHEN":{
                group:["bz_yisha","bz_ch"],
                audio:"luoshen",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
     'step 0'
        player.chooseTarget('选择任意名男性角色，弃置其手中、装备区内各一张牌',get.prompt('CW_LUOSHEN'),[1,Infinity],function(card,player,target){
            return target!=player&&target.num('h')>0&&target.sex=='male';
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('CW_LUOSHEN',result.targets);            
               player.discardPlayerCard(result.targets[i],'h',true)
       
               
        };};
          
    
    
    
    
    
},
            },
            "CW_JIEMING":{
                group:"bz_ch",
                audio:"jieming",
                trigger:{
                    global:"damageEnd",
                },
                check:function (event,player){
    if(ai.get.attitude(player,event.player)<0) return false;
    if(player.num('h','shan')<1||player.num('h')<3) return false;
        return player.hp>=2;
    },
                filter:function (event,player){
        return player.hp>1&&event.player!=player&&event.player.hp>0;
    },
                content:function (){       
        'step 0'
        player.loseHp()
        'step 1'
        trigger.player.draw(2);

        
        
        
    
    },
            },
            "CW_WANGZUO":{
                audio:"jieming",
                skillAnimation:true,
                unique:true,
                derivation:"CW_FUHAN",
                mark:true,
                intro:{
                    content:"limited",
                },
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.CW_WANGZUO) return false;
       return player.hp<2;        
    },
                content:function (){
        player.storage.CW_WANGZUO=true;
        player.loseMaxHp();
        player.draw(2);
        player.recover(99);
        player.addSkill('CW_FUHAN');
        player.awakenSkill("CW_WANGZUO");
        player.awakenSkill("CW_JIEMING");
   
    },
            },
            "CW_FUHAN":{
                group:"bz_yisha",
                audio:"jieming",
                trigger:{
                    global:"shaBegin",
                },
                filter:function (event,player){
        return player.hp>0&&event.player.hp<event.player.maxHp&&event.player!=player;
    },
                content:function (){       
        'step 0'
       trigger.player.draw()
        'step 1'
       if(player.num('h','sha')>0) player.chooseToUse({name:'sha'},'是否使用一张【杀】？');
        'step 2'
        player.draw()
    
    },
            },
            "SH_WUSHENG":{
                audio:"wusheng",
                enable:"phaseUse",
                filterCard:true,
                position:"h",
                prompt:"将一张手牌当【杀】使用",
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":6,"name":"lebu","cardid":"9168134339","clone":{"name":"lebu","suit":"heart","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":6862},"original":"j","_transform":"translateX(0px)","timeout":6852}],
                },
                ai:{
                    respondShan:true,
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                        skip:"phaseDraw",
                        respond:1,
                        respondShan:1,
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                },
            },
            "SH_TUODAO":{
                group:["bz_yisha","bz_ch"],
                audio:"wusheng",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
        return    event.card&&event.card.name=='shan';
;  
    },
                content:function (){
        'step 0'
       player.gain(game.createCard('jiu'));
    
           
                  
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            "SH_JIJIAN":{
                group:["jijian","bz_yisha","bz_ch"],
                audio:"zhuhai",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return player.num('he')>0&&event.target.num('h')>0;
    },
                content:function (){
        'step 0'
       player.chooseToDiscard(1,'he',true);
        'step 1'
        trigger.target.chooseToDiscard(1,'h',true);    
    },
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            jijian:{
                audio:"zhuhai",
                trigger:{
                    target:"shaBegin",
                },
                filter:function (event,player){
        return player.num('he')>0&&event.player.num('h')>0;
    },
                content:function (){
        'step 0'
       player.chooseToDiscard(1,'he',true);
        'step 1'
       trigger.player.chooseToDiscard(1,'h',true);                                      
    },
            },
            "SH_XIAKEXING":{
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
                },
            },
            "SH_FENGCHU":{
                group:["SH_FENGCHU_1","SH_FENGCHU_2","bz_ch"],
                subSkill:{
                    "1":{
                        audio:"niepan",
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        unique:true,
                        filter:function (event){
        return event.nature=='fire';
    },
                        content:function (){
                'step 0'
        trigger.untrigger();
        trigger.finish();
                'step 1'
        player.recover();
        player.draw(2);
        
    },
                        ai:{
                            effect:{
                                target:function (card){
                if(get.tag(card,'fireDamage')){
                    return [0,2];
                }
            },
                            },
                        },
                        sub:true,
                    },
                    "2":{
                        audio:"niepan",
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        unique:true,
                        filter:function (event){
        return event.nature=='thunder';
    },
                        content:function (){
                'step 0'
        trigger.untrigger();
        trigger.finish();
                'step 1'
        player.recover();
        player.draw(2);
                
       
    },
                        ai:{
                            effect:{
                                target:function (card){
                if(get.tag(card,'thunderDamage')){
                    return [0,2];
                }
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "SH_HAOYAN":{
                group:"bz_yisha",
                audio:"zuixiang",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                filterTarget:function (card,player,target){
        return player!=target&&target.num('h')>0;
    },
                content:function (){             
        var targetCard=target.get('h').randomGet();
        player.showCards(targetCard);
        if(get.color(targetCard)=='red'){
              target.draw(3);        
        };
        if(get.color(targetCard)!='red'){
              player.chooseToDiscard(999,'h',true)    
        };
    },
                ai:{
                    order:3,
                    result:{
                        player:0.4,
                        target:1,
                    },
                },
            },
            "bz_yisha":{
                global:"bz_yisha",
                skillAnimation:"epic",
                animationStr:"一战成名",
                animationColor:"fire",
                trigger:{
                    source:"dieBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.addSkill('bz_ersha');
        player.draw();
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/YZCM.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/ysyzcm.jpg");
        game.log(player,'将场地切换为一战成名'); 
        'step 1'
        player.awakenSkill("bz_yisha");



    },
            },
            "bz_ersha":{
                skillAnimation:"epic",
                animationStr:"锋芒毕露",
                animationColor:"fire",
                trigger:{
                    source:"dieBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.addSkill('bz_sansha');
        player.recover();
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/FMBL.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/ssfmbl.jpg");
        game.log(player,'将场地切换为锋芒毕露'); 
        'step 1'
        player.awakenSkill("bz_ersha");
        
    },
            },
            "bz_sansha":{
                skillAnimation:"epic",
                animationStr:"绝代风华",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.addSkill('bz_sisha');
        player.draw(2);
        player.recover();
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/JDFH.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/ssjdfh.jpg");
        game.log(player,'将场地切换为绝代风华'); 
        'step 1'
        player.awakenSkill("bz_sansha");
    },
            },
            "bz_sisha":{
                skillAnimation:"epic",
                animationStr:"狂战似魔",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                frequent:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.draw(4);
        player.gainMaxHp();
        player.recover();
        'step 1'
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/KZSM.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/sskzsm.jpg");
        game.log(player,'将场地切换为狂战似魔'); 
        'step 2'
         player.awakenSkill("bz_sisha");
        
        
    },
            },
            "SH_PAOXIAO":{
                group:["bz_yisha","bz_ch"],
                audio:"paoxiao",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.num('he')>0;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard(1,'he',true).ai=function(card){
return 8-ai.get.value(card);
};
        'step 1'
        target.chooseToDiscard(1,'he',true);
        'step 2'
        player.useCard({name:'jiu'},player)                 
  
                    
    },
                ai:{
                    expose:0.5,
                    order:9,
                    result:{
                        player:0.6,
                        target:function (player,target){
if(target.num('he')>0) return -1;
if(target.num('he')>1) return -1;
},
                    },
                },
            },
            "SH_YISHI":{
                audio:"tishen",
                trigger:{
                    player:"shaMiss",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
        player.draw();
        'step 1'
        trigger.target.draw();



    },
            },
            "SH_XIAOXIONG":{
                group:["bz_yisha","bz_ch"],
                audio:"rende",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.num('h')>0;
    },
                content:function (){
        'step 0'
        player.chooseToDiscard(1,'h',true);
        'step 1'
        player.gainPlayerCard(1,target,'h',true);
    
                     
  
                    
    },
                ai:{
                    expose:0.1,
                    order:9,
                    result:{
                        player:0.2,
                        target:-0.5,
                    },
                },
            },
            "SH_JUEJING":{
                mod:{
                    cardEnabled:function (card,player){
            if(card.name=='shan') return false;
        },
                    cardUsable:function (card,player){
            if(card.name=='shan') return false;
        },
                    cardRespondable:function (card,player){
            if(card.name=='shan') return false;
        },
                    cardSavable:function (card,player){
            if(card.name=='shan') return false;
        },
                },
                audio:"relongdan",
                enable:["chooseToRespond","chooseToUse"],
                filter:function (event,player){
        return player.countCards('h',{name:'shan'})>0;
    },
                filterCard:{
                    name:"shan",
                },
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:13,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":13,"name":"shan","cardid":"7311808327","_transform":"translateX(87.42857142857143px)","clone":{"name":"shan","suit":"heart","number":13,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"fixed":true,"_transitionEnded":true,"timeout":5957},"original":"h","timeout":5945}],
                },
                check:function (){return 1},
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) return 0.6
            },
                    },
                    order:4,
                    useful:-1,
                    value:-1,
                    basic:{
                        order:5,
                        useful:1,
                        value:4.5,
                    },
                    result:{
                        respondSha:true,
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','shan');
                var hs2=player.getCards('h','shan');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                        respondShan:1,
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "SH_LONGDAN":{
                group:["bz_yisha","SH_JUEJING","bz_ch"],
                audio:"ext:三国标准包:2",
                trigger:{
                    player:"shaBegin",
                    target:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.hp>0;
;  
    },
                content:function (){
       'step 0'
       trigger.directHit=true;                                                  
    },
            },
            "SH_DANJI":{
                unique:true,
                audio:"reyajiao",
                trigger:{
                    target:["wuguBegin","nanmanBegin","taoyuanBegin","wanjianBegin"],
                },
                forced:true,
                filter:function (event,player){
        return player.hp>0;
  
    },
                content:function (){
         'step 0'
        trigger.untrigger();
        trigger.finish();                                                          
    },
                group:["SH_DANJI_1","SH_DANJI_2"],
                subSkill:{
                    "1":{
                        forced:true,
                        audio:"reyajiao",
                        unique:true,
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){                
              if(event.nature=='fire') return event.num>1;
    },
                        content:function (){             
                 'step 0'
    trigger.untrigger();
    trigger.finish();
            'step 1'
            player.loseHp()
            },
                        sub:true,
                    },
                    "2":{
                        forced:true,
                        audio:"reyajiao",
                        unique:true,
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
        return event.num>1;
    },
                        content:function (){             
                 'step 0'
    trigger.untrigger();
    trigger.finish();
            'step 1'
            player.loseHp()
            },
                        sub:true,
                    },
                },
            },
            "SH_GUIYIN":{
                unique:true,
                audio:"ext:三国标准包:2",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                forced:true,
                content:function (){
        'step 0'
        player.changeHujia(-999)
        'step 1'
        if(game.players.length>2){
        player.skip('phaseJudge')
        player.skip('phaseDraw');        
        player.skip('phaseUse');        
        player.skip('phaseDiscard');
        if(player.hp<player.maxHp)player.draw();
        if(player.hp<2)player.changeHujia();
        }else{
            if(player.num('h')>3)player.skip('phaseDraw');
            if(player.num('h')<4)player.skip('phaseDiscard');
            if(player.num('h')==0||player.num('e')==0)player.changeHujia();
        }

    },
            },
            "SH_QICAI":{
                group:["bz_yisha","bz_ch"],
                audio:"ext:三国标准包:2",
                unique:true,
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){
    'step 0'
   if(player.num('h')==6)player.chooseToDiscard(1,'h',true);
   if(player.num('h')<6)player.draw();
    'step 1'
   if(player.num('h')>2) player.chooseToUse('是否使用一张牌？'); 
   if(game.players.length<3)player.addSkill('kanpo');
   if(game.players.length<3)player.addSkill('SH_SHENCAI');
       },
            },
            "QX_XURONG":{
                group:["bz_yisha","bz_ch"],
                audio:"luanji",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:2,
                position:"he",
                prompt:"将两张牌当【决斗】使用",
                viewAs:{
                    name:"juedou",
                    suit:"club",
                    number:1,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":12,"name":"huogong","cardid":"2436895419","clone":{"name":"huogong","suit":"diamond","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":10352},"original":"h","timeout":10322},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":5,"name":"guanshi","cardid":"5287174394","clone":{"name":"guanshi","suit":"diamond","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":14425},"original":"h","timeout":14416}],
                },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                        order:5,
                    },
                    wuxie:function (target,card,player,current,state){
            if(get.attitude(current,player)>=0&&state>0) return false;
        },
                    result:{
                        player:function (player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -10;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                    }
                }
                return 0;
            },
                        target:function (player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                    if(typeof _status.event.filterCard=='function'&&
                        _status.event.filterCard({name:'huogong'})){
                        return -1.5;
                    }
                    if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                    }
                    return 0;
                }
                return -1.5;
            },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                        skip:"phaseDraw",
                        respond:2,
                        respondSha:2,
                    },
                },
            },
            "QX_YUANMEN":{
                audio:"luanji",
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(player.storage.QX_YUANMEN) return false;
        if(!player.hasZhuSkill('QX_YUANMEN')) return false;
        if(event.filterCard({name:'sha'})==false) return false;
        return game.hasPlayer(function(current){
            return current!=player&&current.group=='qun';
        });
    },
                check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        if(event.current==undefined) event.current=player.next;
        if(event.current==player){
            event.finish();
        }
        else if(event.current.group=='qun'){
            if((event.current==game.me&&!_status.auto)||(
                get.attitude(event.current,player)>2)||
                event.current.isOnline()){
                player.storage.QX_YUANMEN=true;
                var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
                next.set('ai',function(){
                    var event=_status.event;
                    return (get.attitude(event.player,event.source)-2);
                });
                next.autochoose=lib.filter.autoRespondSha;
                next.set('source',player);
            }
        }
        "step 1"
        player.storage,QX_YUANMEN=false;
        if(result.bool){
            event.finish();
            trigger.result=result;
            trigger.responded=true;
            trigger.animate=false;
            if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                event.current.ai.shown+=0.3;
                if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
            }
        }
        else{
            event.current=event.current.next;
            event.goto(0);
        }
    },
                ai:{
                    respondSha:true,
                },
            },
            "QX_SULI":{
                mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },
            },
            "QX_WUSHUANG":{
                group:["bz_ch","bz_yisha"],
                audio:"wushuang",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.target.num('h','shan')>0;
    },
                content:function (){
        'step 0'
        if(trigger.target.num('h','shan')<2)trigger.directHit=true;
       
       



    },
            },
            "QX_LIJIAN":{
                audio:"lijian",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return game.countPlayer(function(current){
            return current!=player&&current.sex=='male';
        })>1;
    },
                check:function (card){return 10-get.value(card)},
                filterCard:true,
                position:"he",
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(target.sex!='male') return false;
        if(ui.selected.targets.length==1){
            return target.canUse({name:'juedou'},ui.selected.targets[0]);
        }
        return true;
    },
                targetprompt:["先出杀","后出杀"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
        game.delay(0.5);
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return -3;
                }
                else{
                    return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
                }
            },
                    },
                    expose:0.4,
                    threaten:3,
                },
            },
            "QX_BIYUE":{
                group:["bz_ch","bz_yisha"],
                forced:true,
                audio:"biyue",
                unique:true,
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){                
              return player.hp>0;
    },
                content:function (){             
    'step 0'
     trigger.untrigger();
     trigger.finish();
    'step 1'
     player.loseHp(trigger.num)
     player.draw();
    },
            },
            "QX_BAOZHENG":{
                group:["bz_yisha","bz_ch"],
                audio:"hengzheng",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                check:function (event,player){
         if(player.hp<2) return false;
        return player.hp>1;
    },
                content:function (){
     'step 0'
        player.chooseTarget('选择至多三名其他角色，获得其一张手牌',get.prompt('QX_BAOZHENG'),[1,3],function(card,player,target){
            return target!=player&&target.num('h')>0;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){
               player.logSkill('QX_BAOZHENG',result.targets);                          
               player.gainPlayerCard(result.targets[i],'h',true)}         
          if(result.targets.length>1)player.loseHp();
          }else{            
            event.finish(); 
          }
               
       
          
    
    
    
    
    
},
            },
            "QX_HUANGTIAN":{
                group:["bz_yisha","bz_ch"],
                audio:"huangtian",
                enable:["chooseToRespond"],
                filterCard:true,
                position:"he",
                selectCard:2,
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
        if(player.num('he')<2) return false;
    },
                check:function (){return 2},
                prompt:"将两张牌当闪打出",
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
            if(player.num('he')<2) return false;
        },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "QX_LUOLEI":{
                audio:"leiji",
                trigger:{
                    player:"respond",
                },
                filter:function (event,player){
        return event.card.name=='shan';
    },
                direct:true,
                content:function (){
        "step 0";
        player.chooseTarget(get.prompt('releiji')).ai=function(target){
            if(target.hasSkill('hongyan')) return 0;
            return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
        };
        "step 1"
        if(result.bool){
            player.logSkill('releiji',result.targets,'thunder');
            event.target=result.targets[0];
            event.target.judge(function(card){
                var suit=get.suit(card);
                if(suit=='spade') return -4;
                if(suit=='club') return -2;
                return 0;
            });
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.suit=='club'){           
            player.draw(2);
        }
        else if(result.suit=='spade'){
            event.target.damage('thunder');
        }
    },
                ai:{
                    useShan:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')){
                    var hastarget=game.hasPlayer(function(current){
                        return get.attitude(target,current)<0;
                    });
                    var be=target.countCards('e',{color:'black'});
                    if(target.countCards('h','shan')&&be){
                        if(!target.hasSkill('guidao')) return 0;
                        return [0,hastarget?target.countCards('he')/2:0];
                    }
                    if(target.countCards('h','shan')&&target.countCards('h')>2){
                        if(!target.hasSkill('guidao')) return 0;
                        return [0,hastarget?target.countCards('h')/4:0];
                    }
                    if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
                        return [0,0];
                    }
                    if(target.countCards('h')==0){
                        return [1.5,0];
                    }
                    if(target.countCards('h')==1&&!be){
                        return [1.2,0];
                    }
                    if(!target.hasSkill('guidao')) return [1,0.05];
                    return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
                }
            },
                    },
                },
            },
            "bz_ch":{
                trigger:{
                    global:"gameStart",
                },
                frequent:true,
                filter:function (event,player){
        return game.players.length>0;
    },
                content:function (){
        if(player.name=='qx_bz_wenchou')player.node.name.innerHTML='<font color=#FF0>河<br>北<br>狼</font> ';
        if(player.name=='qx_bz_yanliang')player.node.name.innerHTML='<font color=#FF0>河<br>北<br>虎</font> ';                                
        if(player.name=='cw_bz_chengyu')player.node.name.innerHTML='<font color=#FF0>心<br>定<br>之<br>谋<br>士</font> ';
        if(player.name=='cw_bz_simayi')player.node.name.innerHTML='<font color=#FF0>狼<br>顾<br>之<br>鬼</font> ';
        if(player.name=='sh_bz_huangzhong')player.node.name.innerHTML='<font color=#FF0>神<br>射<br>手</font> ';
        if(player.name=='sh_bz_weiyan')player.node.name.innerHTML='<font color=#FF0>傲<br>骨<br>镇<br>将</font> ';                                
        if(player.name=='sh_bz_fazheng')player.node.name.innerHTML='<font color=#FF0>恩<br>怨<br>必<br>报</font> ';
        if(player.name=='qx_bz_guanning')player.node.name.innerHTML='<font color=#FF0>断<br>席<br>清<br>心</font> ';
        if(player.name=='dw_bz_zhangzhao')player.node.name.innerHTML='<font color=#FF0>江<br>东<br>肱<br>骨</font> ';                                
        if(player.name=='cw_bz_guojia')player.node.name.innerHTML='<font color=#FF0>早<br>逝<br>先<br>知</font> ';
        if(player.name=='dw_bz_dinfeng')player.node.name.innerHTML='<font color=#FF0>轻<br>装<br>老<br>军</font> ';
        if(player.name=='dw_bz_xusheng')player.node.name.innerHTML='<font color=#FF0>奋<br>先<br>之<br>将</font> ';                                
        if(player.name=='qx_bz_liubiao')player.node.name.innerHTML='<font color=#FF0>自<br>守<br>之<br>君</font> ';
        if(player.name=='cw_bz_zhangchunhua')player.node.name.innerHTML='<font color=#FF0>冷<br>艳<br>才<br>女</font> ';                                
        if(player.name=='dw_bz_sunjian')player.node.name.innerHTML='<font color=#FF0>江<br>东<br>英<br>魂</font> ';                                
        if(player.name=='sh_bz_zhugeliang')player.node.name.innerHTML='<font color=#FF0>军<br>师<br>将<br>军</font> ';                                
        if(player.name=='sh_bz_machao')player.node.name.innerHTML='<font color=#FF0>锦<br>马<br>超</font> ';
        if(player.name=='dw_bz_ganning')player.node.name.innerHTML='<font color=#FF0>水<br>上<br>锦<br>帆</font> ';                                
        if(player.name=='cw_bz_zhangliao')player.node.name.innerHTML='<font color=#FF0>威<br>震<br>逍<br>遥</font> ';
        if(player.name=='qx_bz_gongsunzan')player.node.name.innerHTML='<font color=#FF0>白<br>马<br>将<br>军</font> ';
        if(player.name=='qx_bz_huangshuo')player.node.name.innerHTML='<font color=#FF0>奇<br>博<br>士</font> ';                                
        if(player.name=='qx_bz_zhaoyun')player.node.name.innerHTML='<font color=#FF0>少<br>年<br>将<br>军</font> ';                                
        if(player.name=='cw_bz_caocao')player.node.name.innerHTML='<font color=#FF0>乱<br>世<br>奸<br>雄</font> ';
        if(player.name=='cw_bz_xunyu')player.node.name.innerHTML='<font color=#FF0>大<br>汉<br>辅<br>臣</font> ';
        if(player.name=='cw_bz_caiyan')player.node.name.innerHTML='<font color=#FF0>异<br>乡<br>孤<br>魂</font> ';
        if(player.name=='cw_bz_caoren')player.node.name.innerHTML='<font color=#FF0>大<br>魏<br>上<br>将</font> ';
        if(player.name=='cw_bz_xiahoudun')player.node.name.innerHTML='<font color=#FF0>独<br>眼<br>狼</font> ';
        if(player.name=='cw_bz_jiaxu')player.node.name.innerHTML='<font color=#FF0>隐<br>身<br>的<br>毒<br>士</font> ';
        if(player.name=='cw_bz_zhenfu')player.node.name.innerHTML='<font color=#FF0>洛<br>神</font> ';
        if(player.name=='dw_bz_zhouyu')player.node.name.innerHTML='<font color=#FF0>美<br>周<br>郎</font> ';
        if(player.name=='dw_bz_sunquan')player.node.name.innerHTML='<font color=#FF0>江<br>东<br>雄<br>君</font> ';
        if(player.name=='dw_bz_sunce')player.node.name.innerHTML='<font color=#FF0>江<br>东<br>小<br>霸<br>王</font> ';                           
        if(player.name=='dw_bz_daqiao')player.node.name.innerHTML='<font color=#FF0>矜<br>持<br>的<br>美<br>人</font> ';
        if(player.name=='dw_bz_xiaoqiao')player.node.name.innerHTML='<font color=#FF0>天<br>之<br>芳<br>馨</font> ';                                
        if(player.name=='dw_bz_luxun')player.node.name.innerHTML='<font color=#FF0>书<br>生<br>意<br>气</font> ';                                
        if(player.name=='dw_bz_lusu')player.node.name.innerHTML='<font color=#FF0>竭<br>虑<br>的<br>忠<br>臣</font> ';
        if(player.name=='sh_bz_liubei')player.node.name.innerHTML='<font color=#FF0>潜<br>渊<br>之<br>龙</font> ';
        if(player.name=='sh_bz_guanyu')player.node.name.innerHTML='<font color=#FF0>武<br>圣</font> ';
        if(player.name=='sh_bz_huangyueying')player.node.name.innerHTML='<font color=#FF0>归<br>隐<br>的<br>杰<br>女</font> ';
        if(player.name=='sh_bz_zhaoyun')player.node.name.innerHTML='<font color=#FF0>常<br>胜<br>将<br>军</font> ';
        if(player.name=='sh_bz_zhangfei')player.node.name.innerHTML='<font color=#FF0>万<br>人<br>敌</font> ';
        if(player.name=='sh_bz_pangtong')player.node.name.innerHTML='<font color=#FF0>凤<br>雏<br>先<br>生</font> ';
        if(player.name=='sh_bz_xushu')player.node.name.innerHTML='<font color=#FF0>至<br>孝<br>的<br>游<br>子</font> ';
        if(player.name=='qx_bz_diaochan')player.node.name.innerHTML='<font color=#FF0>闭<br>月</font> ';
        if(player.name=='qx_bz_lvbu')player.node.name.innerHTML='<font color=#FF0>人<br>中<br>吕<br>布</font> ';
        if(player.name=='qx_bz_dongzhuo')player.node.name.innerHTML='<font color=#FF0>噬<br>血<br>魔<br>王</font> ';
        if(player.name=='qx_bz_yuanshao')player.node.name.innerHTML='<font color=#FF0>四<br>世<br>三<br>公</font> ';
        if(player.name=='qx_bz_zhangjiao')player.node.name.innerHTML='<font color=#FF0>广<br>贤<br>良<br>师</font> ';
                                
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    },
            },
            "QX_LONGQIANG":{
                audio:"reyajiao",
                trigger:{
                    player:"shaMiss",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
        'step 0'
         player.chooseToUse('是否使用一张【杀】？',{name:'sha'});
       
    
   



    },
            },
            "QX_YIYAN":{
                group:["bz_yisha","bz_ch"],
                audio:"reyajiao",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
 
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择一名目标，令其摸取一张牌',get.prompt('QX_YIYAN'),1,function(card,player,target){
            return target.hp>0;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });                                 
        'step 1'
          if(result.bool){            
            for(var i=0;i<result.targets.length;i++){
               player.logSkill('QX_YIYAN',result.targets);            
               result.targets[i].draw()
       
         
        };};
          
     
       
      
      
        
      
           
                  
    },
            },
            "QX_BOCAI":{
                audio:"jizhi",
                trigger:{
                    global:"phaseBefore",
                },
                filter:function (event,player){
    if(event.player==player&&!event.player.skills) return false;
    return true;
     },
                forced:true,
                content:function (){
         player.addTempSkill(trigger.player.skills.randomGet(),{player:'phaseAfter'});
    },
            },
            "QX_QIAOSI":{
                group:["bz_yisha","bz_ch"],
                trigger:{
                    player:"useSkillBegin",
                },
                filter:function (event,player){                
                        return _status.currentPhase==player                    
                },
                content:function (){
                    'step 0'
                   player.draw() 
                  
              },
            },
            "QX_YICONG":{
                group:["bz_yisha","bz_ch"],
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "CW_TUXI":{
                audio:"tuxi",
                group:["bz_yisha","bz_ch"],
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return player.num('he')>1&&event.player!=player;
    },
                check:function (event,player){
   if(ai.get.attitude(player,event.player)>=0) return false;
   if(event.player.num('he')>player.num('he')) return false;
        return player.num('he')>2&&player.num('h','sha')>0;
     },
                content:function (){
        'step 0'
        player.chooseToDiscard(2,true,'he');
        
        
      
         
           
        'step 1'
        player.gainPlayerCard(1,trigger.player,'he',true);
        'step 2'
        if(trigger.player.num('h')==0||trigger.player.num('e')==0)player.chooseToUse('是否对之使用一张杀',{name:'sha'},trigger.player);                
    },
                ai:{
                    expose:0.3,
                },
            },
            "SH_JICHI":{
                audio:"tieji",
                group:["bz_yisha","bz_ch"],
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.num('e')>0&&player.num('h','sha')>0;
    },
                check:function (event,player){   
    if(player.num('e')<2) return false;
        return player.num('h')>1;
     },
                content:function (){
        'step 0'
        player.chooseToDiscard(true,'e');                                                        
        'step 1'
        player.chooseToUse('是否使用一张杀',{name:'sha'});                
    },
                ai:{
                    expose:0.3,
                },
            },
            "DW_JIEXI":{
                audio:"qixi",
                group:["bz_yisha","bz_ch"],
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return player.num('h')>0&&event.player!=player&&event.player.num('hej')>0;
    },
                check:function (event,player){
        if(ai.get.attitude(player,event.player)>0) return false;   
        if(player.num('h')==1&&player.num('h','tao')>0) return false;
        if(player.num('h')==1&&player.num('h','jiu')>0) return false;
        if(player.hp<3&&player.num('h')<2) return false;
        return player.num('h')>0;
     },
                content:function (){
        'step 0'
        player.chooseToDiscard(true,'h');                                          
        'step 1'
        player.useCard({name:'guohe'},trigger.player);
 
   
             
    },
                ai:{
                    expose:0.3,
                },
            },
            "DW_SHUIDAO":{
                audio:"qixi",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return event.source&&event.source.num('h')>2;
    },
                content:function (){
         'step 0'
         player.gainPlayerCard(1,trigger.source,'h',true)
     },
            },
            "BZMS_JUEDOU":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"兵临城下",
                animationColor:"thunder",
                trigger:{
                    player:"juedouBegin",
                },
                filter:function (event,player){ return player.hp>0; },
                content:function (){                },
            },
            "BZMS_TAO":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"修明政理",
                animationColor:"recover",
                trigger:{
                    player:"taoBegin",
                },
                filter:function (event,player){ return player.hp>0; },
                content:function (){                },
            },
            "BZMS_BING1":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"奋甲百万",
                animationColor:"thunder",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){ return player.num('h','sha')>4; },
                content:function (){                },
            },
            "BZMS_BING2":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"带甲十万",
                animationColor:"thunder",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){ return player.num('h','sha')>2; },
                content:function (){                },
            },
            "BZMS_FANG1":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"守圄有余",
                animationColor:"recover",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){ return player.num('h','shan')>1; },
                content:function (){                },
            },
            "BZMS_FANG2":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"天佑之国",
                animationColor:"recover",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){ return player.num('h','shan')>3;},
                content:function (){                },
            },
            "BZMS_FANG3":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"围困之城",
                animationColor:"thunder",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){ return player.hp<3&&player.num('h','shan')<0; },
                content:function (){                },
            },
            "BZMS_BING3":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"无用之兵",
                animationColor:"thunder",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){ return player.num('h','sha')<1 },
                content:function (){                },
            },
            "BZMS_FANG4":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"困兽犹斗",
                animationColor:"thunder",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){ return player.num('h','shan')<1&&player.num('h','sha')>0&&player.hp>1 },
                content:function (){                },
            },
            "BZMS_MOU1":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"天时地利",
                animationColor:"fire",
                trigger:{
                    player:"huogongBegin",
                },
                filter:function (event,player){ return player.hp>0; },
                content:function (){                },
            },
            "BZMS_MOU2":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"上兵伐谋",
                animationColor:"thunder",
                trigger:{
                    player:["shunshouBegin","wuzhongBegin"],
                },
                filter:function (event,player){ return player.hp>0; },
                content:function (){                },
            },
            "BZMS_ZSKP":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                filter:function (event,player){
        return player.hp>0;
    },
                content:function (){
    'step 0'
    if(player.name=='sh_bz_zhugeliang')player.gain(game.createCard('bz_longzhongdui'));
    if(player.name=='cw_bz_caocao')player.gain(game.createCard('bz_zhaoxianling'));
    if(player.name=='sh_bz_guanyu')player.gain(game.createCard('bz_kanglongyouhui'));   
    'step 1'
    if(player.name=='sh_bz_zhugeliang')player.addSkill('LZD');
    if(player.name=='cw_bz_caocao')player.addSkill('ZXL')
    if(player.name=='sh_bz_guanyu')player.addSkill('KLYH')





    },
            },
            ZXL:{
                mark:true,
                intro:{
                    content:"招贤令",
                },
                audio:"rejianxiong",
                forced:true,
                skillAnimation:"epic",
                animationStr:"青青子衿",
                animationColor:"recover",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){ return player.num('h')<2; },
                content:function (){             
    'step 0'
    player.gain(game.createCard('bz_zhaoxianling'));
    },
            },
            KLYH:{
                audio:"wusheng",
                mark:true,
                intro:{
                    content:"亢龙有悔",
                },
                forced:true,
                skillAnimation:"epic",
                animationStr:"亢龙有悔",
                animationColor:"thunder",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){ return player.hp>0; },
                content:function (){ 
    'step 0'
    player.gain(game.createCard('bz_kanglongyouhui'));

    },
            },
            "QXZL_CF":{
                forced:true,
                skillAnimation:true,
                animationStr:"天子★册封",
                animationColor:"fire",
                trigger:{
                    global:"gameStart",
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return current!=player&&current.group==player.group;
        });
    },
                content:function (){
    'step 0'
    player.chooseTarget('选择一名势力与你一致的角色，封其为辅臣',get.prompt('QXZL_CF'),function(card,player,target){
        return target!=player&&target.group==player.group&&target.identity!='zhong';
    }).set("ai",function(target){
            return get.damageEffect(target,player,player);
        
    });
    'step 1'
      if(result.bool){                       
           player.logSkill('QXZL_CF',result.targets);                            
           result.targets[0].identity='zhong';
           result.targets[0].addSkill('FC_YW')
           result.targets[0].removeSkill('ZH_JB')
           player.removeSkill('QXZL_CF');  
           result.targets[0].draw(2)           
           game.showIdentity();                                         
      }               
                    
        
        
        
        
    },
            },
            "ZH_PH":{
                skillAnimation:"epic",
                animationStr:"势力消亡",
                animationColor:"thunder",
                forced:true,
                trigger:{
                    player:"dieBegin",
                },
                filter:function (event,player){
       return player.identity!='zhong'&&player.group!=game.zhu.group;                  
       },
                content:function (){
                'step 0'                 
        var n=[1,2].randomGet(); 
        if(n==1){
            
        };
        if(n==2){
            player.identity='fan';
            trigger.untrigger();
            trigger.finish();
            player.chooseToDiscard(999,'hej',true)
            player.draw(4);
            player.recover(999);
            player.maxHp--;
            player.removeSkill('ZH_PH')
            player.removeSkill('ZH_JB')
            player.removeSkill('zl_sljb');
            player.removeSkill('ZH_TQ1')
            player.removeSkill('ZH_TQ2')
            player.addSkill('PZ_XY');
            player.addSkill('zl_fklx')
            if(get.population('fan')>1)player.insertPhase();
            
        };                             
                'step 1'
                lib.translate.fan='叛贼';
                game.showIdentity();
               
       },
            },
            "zl_sljb":{
                forced:true,
                skillAnimation:"epic",
                animationStr:"势力扩大",
                animationColor:"recover",
                trigger:{
                    source:"dieBegin",
                },
                filter:function (event,player){
        return player.hp>0&&player.identity=='nei';
    },
                content:function (){
        'step 0'
        player.recover()
        player.addSkill('ZH_TQ1');
        'step 1'
        player.removeSkill('zl_sljb');
        player.addSkill('zl_yfbz');
        
    },
            },
            "zl_ygql":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"一股清流",
                animationColor:"recover",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='zhong'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('zl_kfhs');
       player.removeSkill('zl_ygql');
        'step 1'
       player.addSkill('FC_TQ1');
       player.draw(2)
       game.zhu.draw(2)
    
    
    },
            },
            "zl_fklx":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"郡县沦陷",
                animationColor:"recover",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='fan'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('zl_txzd');
       player.removeSkill('zl_fklx');
        'step 1'
      for(var i=0;i<game.players.length;i++){
   if(game.players[i].identity=='zhu'||game.players[i].identity=='nei'||game.players[i].identity=='zhong') continue
   game.players[i].draw();                                           
                    }
        'step 2'
        game.zhu.chooseToDiscard(2,'h',true)
       
    
    
    },
            },
            "zl_kfhs":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"匡扶汉室",
                animationColor:"fire",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='zhong'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('zl_yktx');
       player.removeSkill('zl_kfhs');
        'step 1'
       player.removeSkill('FC_TQ1')
       player.addSkill('FC_TQ2');
       player.recover()
       player.draw();
       game.zhu.recover()
       game.zhu.draw()
    
    },
            },
            "zl_yktx":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"一匡天下",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='zhong'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('FC_CX');
       player.removeSkill('zl_yktx');
       player.removeSkill('FC_YW');
        'step 1'    
       game.zhu.draw(4)
       player.draw(4)
       player.recover()
       game.zhu.recover()
    
    
    },
            },
            "zl_yfbz":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"一方霸主",
                animationColor:"fire",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='nei';
    },
                content:function (){
        'step 0'
       player.changeHujia()
       player.draw(2);
       player.removeSkill('ZH_TQ1');
       player.addSkill('zl_txzb');
       player.removeSkill('zl_yfbz');
        'step 1'
        player.addSkill('ZH_TQ2')
    
    
    },
            },
            "zl_txzb":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"天下至霸",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='nei';
    },
                content:function (){
        'step 0'
       player.recover();
       player.removeSkill('ZH_PH') 
       player.removeSkill('ZH_JB');
       player.draw(4);     
       player.removeSkill('zl_txzb');
       
        'step 1'
       player.addSkill('ZH_XH');
    
    
    },
            },
            "zl_txzd":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"天下震动",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='fan'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('zl_qsjj');
       player.removeSkill('zl_txzd');
        'step 1'
      for(var i=0;i<game.players.length;i++){
   if(game.players[i].identity=='zhu'||game.players[i].identity=='nei'||game.players[i].identity=='zhong') continue
   game.players[i].draw();                                           
                    }
        'step 2'
        game.zhu.loseHp()
        game.zhu.chooseToDiscard(true)
        'step 3'
       player.insertPhase();
    
    
    },
            },
            "zl_qsjj":{
                unique:true,
                skillAnimation:"epic",
                animationStr:"气数将尽",
                animationColor:"thunder",
                trigger:{
                    source:"dieBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.identity=='fan'&&event.player.identity!='zhu';
    },
                content:function (){
        'step 0'      
       player.addSkill('PC_ZS');
       player.removeSkill('zl_qsjj');
        player.removeSkill('PZ_XY')
        'step 1'
      for(var i=0;i<game.players.length;i++){
   if(game.players[i].identity=='zhu'||game.players[i].identity=='nei'||game.players[i].identity=='zhong') continue
   game.players[i].draw(); 
   game.players[i].addSkill('PC_NL');
   game.players[i].skip('phaseUse');
                    }
        'step 2'            
     
       game.zhu.loseHp()
    
    
    },
            },
            "ZH_TQ1":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "ZH_TQ2":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                    maxHandcard:function (player,num){
             return num+1;
        },
                },
            },
            "FC_TQ1":{
                mod:{
                    maxHandcard:function (player,num){
            return num++;
        },
                },
            },
            "FC_TQ2":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "ZH_XH":{
                mark:true,
                intro:{
                    content:"乱世奸雄",
                },
                skillAnimation:"epic",
                animationStr:"挟天子以令诸侯",
                animationColor:"fire",
                audio:"rejianxiong",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                filterTarget:function (card,player,target){
        return player!=target&&target.identity=='zhu';
    },
                content:function (){  
        'step 0'
        target.skip('phaseUse')
        'step 1'
        lib.translate.zhu='傀儡';
        game.showIdentity();
        'step 2'
        if(game.players.length<3)target.chooseToDiscard(2,'he',true);
     
  
  
                 
        
      
    },
                ai:{
                    order:9,
                    result:{
                        player:1,
                        target:-1,
                    },
                },
            },
            "FC_CX":{
                mark:true,
                intro:{
                    content:"大汉丞相",
                },
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        return event.source&&event.player.hp>0&&event.player.identity=='zhu';
    },
                content:function (){
 'step 0'
  player.chooseToUse('是否使用一张【杀】？',{name:"sha"});
 'step 1'
   trigger.player.draw(2)
 
    },
            },
            "SH_ZHISHENG":{
                skillAnimation:true,
                animationStr:"谋定天下",
                animationColor:"fire",
                enable:"phaseUse",
                usable:1,
                audio:"huoji",
                filter:function (event,player){
        return player.countCards('he')>0  
    },
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }                       
    return ui.create.dialog([list,'vcard']);                                        
        },
                    check:function (button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){                   
        return {
                filterCard:true,   
                filterCard:true,                          
                selectCard:1,                   
                position:'he',               
                popname:true,
                viewAs:{name:links[0][2]},
            }                                                                    
        },
                    prompt:function (links,player){           
           
            return '选择任意一张牌当作'+get.translation(links[0][2])+'使用';                 
        },
                },
                ai:{
                    order:4,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('h');
                if(cards.length>0&&player.hp>1) return 1;
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.6,
                },
            },
            "SH_DONGCHA":{
                audio:"kanpo",
                enable:"chooseToUse",
                position:"hej",
                filterCard:function (card){
        return get.color(card)=='black'||get.color(card)=='red';
    },
                viewAsFilter:function (player){
        return player.num('hej',{color:['black','red']})>0;
    },
                viewAs:{
                    name:"wuxie",
                    suit:"diamond",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":12,"name":"fangtian","cardid":"7446296388","clone":{"name":"fangtian","suit":"diamond","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":5438},"original":"e","timeout":5419}],
                },
                prompt:"将一张牌当无懈可击使用",
                check:function (card){return 8-ai.get.value(card)},
                threaten:1.2,
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "SH_WEIWO":{
                group:["bz_yisha","bz_ch"],
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "DW_CHUANGZHEN":{
                group:["bz_yisha","bz_ch"],
                audio:"yinghun",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return player.num('h')>0&&event.target.num('h')>0;
    },
                check:function (event,player){
  if(player.num('h')<2) return false;
  if(1<player.num('h')<4&&player.hp<2) return false;
        return player.hp>1&&player.num('h')>1;
    },
                content:function (){
        'step 0'
       player.chooseToDiscard(2,'h',true);
        'step 1'
        trigger.target.chooseToDiscard(2,'h',true);    
    },
            },
            "CW_JUEQING":{
                trigger:{
                    source:"damageBefore",
                },
                forced:true,
                audio:"jueqing",
                priority:16,
                check:function (){return false;},
                content:function (){
        trigger.untrigger();
        trigger.finish();
        var ex=0;
        if(trigger.card&&trigger.card.name=='sha'){
            if(player.hasSkill('jiu')) ex++;
            if(player.hasSkill('luoyi2')) ex++;
            if(player.hasSkill('reluoyi2')) ex++;
        }
        trigger.player.loseHp(trigger.num+ex);
        player.draw();
        player.chooseToDiscard(true)
    },
                ai:{
                    jueqing:true,
                },
            },
            "CW_MIEKOU":{
                mod:{
                    cardSavable:function (card,player){
            if(!_status.currentPhase) return;
            if(_status.currentPhase.hasSkill('CW_MIEKOU')&&_status.currentPhase!=player){
                if(card.name=='tao'&&_status.event.dying!=player) return false;
            }
        },
                },
            },
            "QX_ZISHOU":{
                group:["bz_yisha","bz_ch"],
                mod:{
                    maxHandcard:function (player,num){
             return num+=player.hp;
        },
                    globalFrom:function (from,to,distance){
            return distance+=1;
        },
                },
            },
            LZD:{
                audio:"kongcheng",
                mark:true,
                intro:{
                    content:"三分天下",
                },
                forced:true,
                skillAnimation:"epic",
                animationStr:"卧龙出山",
                animationColor:"thunder",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){ return game.players.length==3
      },
                content:function (){ 
    'step 0'
    player.gain(game.createCard('bz_longzhongdui'));
    },
            },
            "DW_POJUN":{
                group:["bz_yisha","bz_ch"],
                audio:"pojun",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
    if(ai.get.attitude(player,event.player)>0) return false;
    },
                filter:function (event,player){
        return event.player.num('he')>0&&event.card&&event.card.name=='sha';
    },
                content:function (){       
        player.discardPlayerCard(1,trigger.player,'he',true)   
    
    },
            },
            "CW_BUJI":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                },
                group:"CW_BUJI_1",
                subSkill:{
                    "1":{
                        mod:{
                            globalTo:function (from,to,distance){
            return distance-1;
        },
                        },
                        sub:true,
                    },
                },
            },
            "CW_GUICAI":{
                group:["bz_ch","bz_yisha"],
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return 2;
        },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            "DW_GUZHENG":{
                group:["bz_ch","bz_yisha"],
                mod:{
                    maxHandcard:function (player,num){
             return num+1;
        },
                },
            },
            "DW_ROUBO":{
                group:["bz_yisha","bz_ch"],
                audio:"duanbing",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event,player){
        return event.player!=player&&event.player.num('h')>=player.num('h');
    },
                check:function (event,player){
      if(ai.get.attitude(player,event.player)>0) return false;
        return player.num('h','sha')>0&&player.num('h','shan')>0;
    },
                content:function (){
    'step 0'
     player.chooseToUse('是否使用一张【杀】？',{name:'sha'},trigger.player);
    'step 1'
    trigger.player.chooseToUse('是否使用一张【杀】？',player,{name:'sha'});                           
       },
            },
            "QX_DANBO":{
                group:["bz_ch","bz_yisha"],
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                unique:true,
                content:function (){
        trigger.num--;
    },
                ai:{
                    threaten:1.3,
                },
            },
            "DW_CHAOCHEN":{
                audio:"guzheng",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return player.hp>0&&player.num('h')>player.hp&&player.num('h')>1;
    },
                content:function (){
     'step 0'
        player.chooseTarget('请选择一名目标，令之获得【固政】',get.prompt('DW_GUZHENG'),1,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return ai.get.attitude(player,target);
        });
        'step 1'
          if(result.bool){
            
            for(var i=0;i<result.targets.length;i++){
                player.chooseToDiscard(2,true);
                player.logSkill('DW_GUZHENG',result.targets);            
               result.targets[i].addSkill('DW_GUZHENG')
       
         
        };};
          
    
    
    
    
    
},
            },
            "QX_DUANXI":{
                group:["bz_yisha","bz_ch"],
                trigger:{
                    target:"shaBegin",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                check:function (event,player){
if(ai.get.attitude(player,event.player)>0) return false;},
                content:function (){
        'step 0'
         player.chooseToDiscard().ai=function(card){
         return 3-ai.get.value(card);
}
        'step 1'
         if(player.num('h')<=trigger.player.num('h'))player.discardPlayerCard(1,trigger.player,'he',true)
        'step 2'
         player.draw()
   
       




         
         
         
         
         
         
         
         
         
    },
            },
            "SH_ENYUAN":{
                audio:"enyuan",
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.source);
        var num=event.source.countCards('h');
        if(att<=0) return true;
        if(num>2) return true;
        if(num) return att<4;
        return false;
    },
                filter:function (event,player){
        return event.source&&event.source!=player&&event.num>0&&event.source.isAlive();
    },
                content:function (){
        "step 0"
        event.num=trigger.num;
        "step 1"
        trigger.source.chooseCard('交给'+get.translation(player)+'一张手牌或流失一点体力').set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                return 11-get.value(card);
            }
            else{
                return 7-get.value(card);
            }
        });
        "step 2"
        if(result.bool){
            player.gain(result.cards[0],trigger.source);
            trigger.source.$give(1,player);
        }
        else{
            trigger.source.loseHp();
        }
        if(event.num>1){
            event.num--;
            event.goto(1);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                if(!target.hasFriend()) return;
                if(get.tag(card,'damage')) return [1,0,0,-0.7];
            },
                    },
                },
                group:["xinenyuan2","bz_ch","bz_yisha"],
            },
            "SH_JIGONG":{
                group:["bz_ch","bz_yisha"],
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-Infinity;
        },
                },
            },
            "SH_KUANGGU":{
                group:["bz_ch","bz_yisha"],
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        return get.distance(player,event.player)<=1&&event.num>0;
    },
                forced:true,
                direct:true,
                audio:"kuanggu",
                content:function (){
        'step 0'
        event.num=trigger.num;
        'step 1'
        player.draw(trigger.num);        
        },
            },
            "CW_DANMOU":{
                group:["bz_yisha","bz_ch"],
                audio:"shefu",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
     return player.hp>1;   
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.num('he')>0;
    },
                check:function (event,player){
        if(player.hp<2) return false;
        if(player.num('h')<3&&player.hp<2) return false;       
        return player.hp>1;
    },
                content:function (){
        'step 0'
       player.loseHp()
        'step 1'
       player.discardPlayerCard(2,target,'he',true);                                       
                                      
    },
                ai:{
                    expose:0.5,
                    order:8,
                    result:{
                        player:-0.5,
                        target:function (player,target){
if(target.num('he')>1) return -1;
if(target.num('he')<2) return -1;
},
                    },
                },
            },
            "CW_HUALAO":{
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(target.hp==1){
                if(card.name=='sha') return false;
            }
        },
                },
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(player.hp!=1) return false;
            }
        },
                },
            },
            "CW_WEICHENG":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance-1;
        },
                },
            },
            "CW_LANGGU":{
                group:["bz_yisha","bz_ch"],
                audio:"fankui",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
         if(player.hasSkill('CW_LANGGU2')) return false;
        return event.player!=player&&event.player.num('he')>0&&_status.currentPhase!=player
    },
                check:function (event,player){
     if(ai.get.attitude(player,event.player)>3) return false;
    },
                content:function (){
    'step 0'
   player.gainPlayerCard(1,'he',true,trigger.player);
    'step 1'
   player.chooseCard('交给'+get.translation(trigger.player)+'一张手牌',true)
    'step 2'
    trigger.player.gain(result.cards[0],player)
    player.$give(result.cards[0],trigger.player,true)
    player.addTempSkill('CW_LANGGU2')
 
       },
            },
            "CW_MIAOSUAN":{
                audio:"guicai",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.num('h')>0;
    },
                content:function (){
        "step 0"            
        player.showHandcards();
        "step 1"       
        var cards=player.getCards('h');
        for(var i=1;i<cards.length;i++){
            if(get.color(cards[i])!=get.color(cards[0])) return;
        }
      player.draw(2);
    },
                ai:{
                    threaten:0.9,
                },
            },
            "QX_HUBU":{
                group:["bz_ch","bz_yisha"],
                audio:"shuangxiong",
                trigger:{
                    player:"shaMiss",
                },
                filter:function (event,player){
        return player.hp>0&&event.player.num('e')>0;
    },
                usable:1,
                check:function (event,player){
if(ai.get.attitude(player,event.player)>=0) return false;},
                content:function (){
        'step 0'
      player.diacardPlayerCard(1,'e',trigger.player,true)  
        
       



    },
            },
            "QX_LANGLUE":{
                group:["bz_ch","bz_yisha"],
                audio:"shuangxiong",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
    if(ai.get.attitude(player,event.player)>0) return false;
    },
                filter:function (event,player){
              return event.card&&event.card.name=='sha'&&event.player.num('h')>0;
    },
                content:function (){       
           player.gainPlayerCard(1,trigger.player,'h',true)   
    
    },
            },
            "PC_NL":{
                skillAnimation:"epic",
                animationStr:"自相残杀",
                animationColor:"thunder",
                forced:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
       return player.identity=='fan'&&player.group!=game.zhu.group;                  
       },
                content:function (){
   'step 0'                 
    var n=[1,2].randomGet(); 
    if(n==1){            
    };
    if(n==2){
    if(get.population('nei')<3){
   player.identity='nei';
   player.chooseToDiscard(true);
   player.removeSkill('PC_ZS')
   player.removeSkill('PC_NL')
   game.showIdentity();
   for(var i=0;i<game.players.length;i++){
   if(game.players[i].identity=='zhu'||game.players[i].identity=='nei'||game.players[i].identity=='zhong') continue
   game.players[i].chooseToDiscard(true) 
   game.players[i].removeSkill('PC_NL');                       }            
    }else{
        player.chooseToDiscard(true)
    }

    }},
            },
            "PC_ZS":{
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-1;
        },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return 2;
        },
                },
            },
            "CW_LANGGU2":{
            },
            "SH_SHENCAI":{
                mod:{
                    cardUsable:function (card){
            if(get.info(card)&&get.info(card).forceUsable) return;
            return Infinity;
        },
                    targetInRange:function (){
            return true;
        },
                },
            },
            "CW_QIZUO":{
                group:"CW_QIZUO_1",
                trigger:{
                    player:"phaseUseEnd",
                },
                filter:function (event,player){
        return player.num('h','sha')>(player.num('h')-2);
    },
                content:function (){
        'step 0'
        player.skip('phaseDiscard')
    },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
          return player.maxHp>player.num('h');
    },
                        content:function (){
          'step 0'
          player.gain(game.createCard('sha'));
      },
                        sub:true,
                    },
                },
            },
            "SYMS_BN":{
                audio:"ext:三国标准包:1",
                skillAnimation:true,
                animationColor:"fire",
                animationStr:"<img src=file:///storage/emulated/0/Android/data/com.widget.noname/extension/三国标准包/暴怒.png width='800' height='440'>",
                unique:true,
                trigger:{
                    player:"changeHp",
                },
                forced:true,
                priority:100,
                filter:function (event,player){
        return player.hp<=4;
    },
                content:function (){
        'step 0'
        ui.backgroundMusic.src=lib.assetURL+'extension/三国标准包/眉间雪-HITA.mp3';
        ui.background.setBackgroundImage("extension/三国标准包/symszt.jpg");
        if(player.hp>4){
            game.delay();
        }
        'step 1'      
        player.reinit('sy_lvbu1','sy_lvbu2'); 
        player.removeSkill('syms_th');
        player.removeSkill('SYMS_BN')
        player.addSkill('syms_cc');
        player.update();
        ui.clear();
        player.link(false);
        player.turnOver(false);
        player.discard(player.getCards('ej'));
        'step 2'
        while(_status.event.name!='phaseLoop'){
            _status.event=_status.event.parent;
        }     
        _status.paused=false;
        _status.event.player=player;
        _status.event.step=0;       
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')||get.tag(card,'loseHp')){
                    if(player.hp==5){
                        if(game.players.length<4) return [0,5];
                        var num=0
                        for(var i=0;i<game.players.length;i++){
                            if(game.players[i]!=game.boss&&game.players[i].hp==1){
                                num++;
                            }
                        }
                        if(num>1) return [0,2];
                        if(num&&Math.random()<0.7) return [0,1];
                    }
                }
            },
                    },
                },
            },
        },
        translate:{
            "DW_FENGYA":"风雅",
            "DW_FENGYA_info":"每当你打出或者使用一张【闪】，你可以摸取一张牌。<font color=#F0F>反间</font> ：被动：当你发动【风雅】时，可以使用一张牌。",
            "DW_YEYAN":"业炎",
            "DW_YEYAN_info":"出牌阶段或你需要使用一张牌时，可以将任意一张红色牌当【火攻】使用。出牌阶段时限一次。",
            "DW_SANSI":"三思",
            "DW_SANSI_info":"出牌阶段限一次，你可以弃置任意张手牌，然后摸取一张牌。",
            "DW_ZHIHENG":"制衡",
            "DW_ZHIHENG_info":"每当你失去大于2张的牌后，你摸取一张牌，且此时若你体力值小于3，你恢复一点体力。",
            "DW_XBW":"小霸王",
            "DW_XBW_info":"每当你使用一张【杀】，你获得一层护甲，若你拥有护甲，你需要先失去之。",
            "DW_SAODANG":"扫荡",
            "DW_SAODANG_info":"开始阶段，若你拥有护甲，你失去之，然后摸取一张牌。",
            "DW_JIEMING":"竭命",
            "DW_JIEMING_info":"每名其他角色的回合开始时，你可以弃置一张手牌，然后令之摸取一张牌",
            "DW_YUANLV":"远虑",
            "DW_YUANLV_info":"你的回合结束时，若游戏人数不大于4，你摸取一张牌，若游戏人数大于4，你将手牌补充到体力上限",
            "DW_QIANXUN":"谦逊",
            "DW_QIANXUN_info":"你可以将一张手牌当[闪]使用或打出",
            "DW_ZHIDI":"制敌",
            "DW_ZHIDI_info":"每当你打出或者使用一张【闪】时，可以弃置一名其他角色的一张牌。",
            "DW_LIULI":"流离",
            "DW_LIULI_info":"出牌阶段限一次，你可以将两张黑色手牌当【兵粮寸断】使用。",
            "DW_GUOSE":"国色",
            "DW_GUOSE_info":"<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减二，其他角色计算与你的距离时，始终减一。",
            "DW_HONGYAN":"红颜",
            "DW_HONGYAN_info":"出牌阶段限一次，你可以将两张红色手牌当【乐不思蜀】使用。",
            "DW_TIANXIANG":"天香",
            "DW_TIANXIANG_info":"当你成为【杀】的目标时，你可以弃置一名男性角色的一张手牌。",
            "CW_NENGCHEN":"能臣",
            "CW_NENGCHEN_info":"游戏开始时，若你的身份不为主公，你获得一点体力上限再恢复一点体力。",
            "CW_GANGLIE":"刚烈",
            "CW_GANGLIE_info":"<font color=red>锁定技</font> ：当你受到伤害后，你可以令来源弃置两张牌。",
            "CW_JIANXIONG":"奸雄",
            "CW_JIANXIONG_info":"每当你造成或者受到伤害后，你可以获得目标/来源一张牌，包括判定区内。",
            "CW_JUSHOU":"据守",
            "CW_JUSHOU_info":"当你成为【杀】的目标时，你可以弃置两张手牌，令此杀无效。",
            "CW_QIANGGONG":"强攻",
            "CW_QIANGGONG_info":"当你的【杀】被闪避时，你可以自损体力一点，视为对目标使用了一张【杀】，出牌阶段限一次。",
            "CW_BEIGE":"悲歌",
            "CW_BEIGE_info":"当你受到伤害或者体力流失后，可以指定一名其他角色，弃置其x张牌，x为你已损失体力值。",
            "CW_DUANCHANG":"断肠",
            "CW_DUANCHANG_info":"当你受到伤害后，来源需要失去一点体力。",
            "CW_YINSHEN":"隐身",
            "CW_YINSHEN_info":"出牌阶段限一次，你可以弃置任意张手中的【杀】，然后获得一层护甲。",
            "CW_DUMIE":"毒灭",
            "CW_DUMIE_info":"开始阶段，若你拥有护甲，你失去之，然后弃置一名手牌数小于4的角色的所有手牌再摸取一张牌。",
            "CW_LUOSHEN":"洛神",
            "CW_LUOSHEN_info":"你的回合开始时，你可以选择任意名男性角色，弃置这些角色各一张手牌。",
            "CW_JIEMING":"节命",
            "CW_JIEMING_info":"当其他角色受到伤害后，若你体力值大于1，你可以失去一点体力，令之摸取两张牌。",
            "CW_WANGZUO":"王佐",
            "CW_WANGZUO_info":"<font color=blue>觉醒技</font> ：你的回合开始时，若你的体力值小于二，那么你失去一点体力上限，并获得技能【辅汉】，再失去技能【节命】并将体力值补满，然后摸取两张牌。",
            "CW_FUHAN":"辅汉",
            "CW_FUHAN_info":"当一名已受伤的其他角色使用【杀】时，你可以令之摸取一张牌，若此时你手中有【杀】，你可以使用一张【杀】，且不论你使不使用，在此之后，你都可以摸取一张牌。",
            "SH_WUSHENG":"武圣",
            "SH_WUSHENG_info":"出牌阶段，你可以将一张手牌当【杀】使用。",
            "SH_TUODAO":"拖刀",
            "SH_TUODAO_info":"每当你打出或者使用一张【闪】，你可以获得一张【酒】。",
            "SH_JIJIAN":"击剑",
            "SH_JIJIAN_info":"当你使用【杀】时，你可以弃置一张牌，再令目标弃置一张牌。当你被【杀】指定时，你可以弃置一张牌，再令来源弃置一张手牌。",
            jijian:"击剑",
            "jijian_info":"",
            "SH_XIAKEXING":"侠客行",
            "SH_XIAKEXING_info":"<font color=red>锁定技</font> ：你的手牌上限始终等于体力上限。你的进攻距离加一。",
            "SH_FENGCHU":"凤雏",
            "SH_FENGCHU_info":"每当你受到属性伤害时，取消之，并且回复一点体力，然后摸取两张牌。",
            "SH_HAOYAN":"豪言",
            "SH_HAOYAN_info":"出牌阶段限一次，你可以选择弃置一张手牌，再随机展示一名其他角色的一张手牌，若为红色，其摸取三张牌，若为黑色，你弃置所有手牌。 ",
            "bz_yisha":"一杀",
            "bz_yisha_info":"",
            "bz_ersha":"双杀",
            "bz_ersha_info":"",
            "bz_sansha":"三杀",
            "bz_sansha_info":"",
            "bz_sisha":"四杀",
            "bz_sisha_info":"",
            "SH_PAOXIAO":"咆哮",
            "SH_PAOXIAO_info":"出牌阶段限一次，你可以选择一名有牌的其他角色，然后你弃置一张牌再由目标弃置一张牌，并且视为你使用了一张【酒】。",
            "SH_YISHI":"义释",
            "SH_YISHI_info":"当你的【杀】被闪避时，你可以同目标共同摸取一张牌。",
            "SH_XIAOXIONG":"枭雄",
            "SH_XIAOXIONG_info":"出牌阶段限一次，你可以选择一名有手牌的其他角色，然后你弃置一张手牌再获得目标一张手牌",
            "SH_JUEJING":"绝境",
            "SH_JUEJING_info":"",
            "SH_LONGDAN":"龙胆",
            "SH_LONGDAN_info":"你使用的【杀】不可闪避。<font color=#F0F>绝境</font> ：被动技能：锁定技：你的【闪】可以视为【杀】使用或打出。你无法打出【闪】来响应【杀】。",
            "SH_DANJI":"单骑",
            "SH_DANJI_info":"锁定技：【南蛮入侵】、【万箭齐发】和【桃园结义】、【五谷丰登】对你无效。且当你受到大于一点的伤害时，你将之改为流失你一点体力。",
            "SH_GUIYIN":"归隐",
            "SH_GUIYIN_info":"<font color=red>锁定技</font> ：你的回合开始时，若游戏人数大于2，你跳过你的判定阶段、摸牌阶段和出牌阶段，然后跳过你的弃牌阶段，且若你已受伤，还将摸取一张牌，并且若此时体力值小于2，你将获得一层护甲直至下次回合开始。否则，若你的手牌数不小于4，跳过你的摸牌阶段，你的手牌数小于4，跳过你的弃牌阶段，且若你的手牌区或者装备区里没牌，你获得一层护甲",
            "SH_QICAI":"奇才",
            "SH_QICAI_info":"<font color=orange>特殊技</font> :当一名其他角色的回合开始时，若你的手牌数等于6，你弃置一张手牌，若你手牌数小于6，你摸取一张牌，且若你手牌数大于2，你可以使用一张牌，且若游戏人数不足三名，你获得【看破】和【神才】。",
            "QX_XURONG":"虚荣",
            "QX_XURONG_info":"出牌阶段限一次，你可以将两张牌当【决斗】使用。",
            "QX_YUANMEN":"袁门",
            "QX_YUANMEN_info":"主公技，群势力角色可以替你打出[杀]",
            "QX_SULI":"俗丽",
            "QX_SULI_info":"<font color=red>锁定技</font> ：你的手牌上限始终减一。",
            "QX_WUSHUANG":"无双",
            "QX_WUSHUANG_info":"当你使用【杀】时，若目标手中有且只有一张【闪】，其不可打出【闪】响应你的【杀】。",
            "QX_LIJIAN":"离间",
            "QX_LIJIAN_info":"出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次",
            "QX_BIYUE":"闭月",
            "QX_BIYUE_info":"<font color=red>锁定技</font> ：当你受到伤害时，将之改为流失等量的体力并且由你摸取一张牌。",
            "QX_BAOZHENG":"暴征",
            "QX_BAOZHENG_info":"你的回合结束时，你可以选择任意名其他角色（至多3名），获得其一张手牌，若目标超过一名，你需要先失去一点体力",
            "QX_HUANGTIAN":"黄天",
            "QX_HUANGTIAN_info":"你可以将两张牌当[闪]使用或打出",
            "QX_LUOLEI":"落雷",
            "QX_LUOLEI_info":"每当你打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，你摸取两张牌，若结果为黑桃，其受到一点雷电伤害",
            "bz_ch":"称号",
            "bz_ch_info":"",
            "QX_LONGQIANG":"龙枪",
            "QX_LONGQIANG_info":"当你的【杀】被闪避时，你可以再次使用一张【杀】。",
            "QX_YIYAN":"义言",
            "QX_YIYAN_info":"你使用【杀】造成伤害后，可以令一名角色摸取一张牌。",
            "QX_BOCAI":"博采",
            "QX_BOCAI_info":"<font color=red>锁定技</font> ：每当一名其他角色的回合开始时，你随机获得其一项技能到你回合结束阶段",
            "QX_QIAOSI":"巧思",
            "QX_QIAOSI_info":"每当你在回合内使用技能时，你摸取一张牌。",
            "QX_YICONG":"义从",
            "QX_YICONG_info":"<font color=red>锁定技</font> ：你的防御距离加一。你的进攻距离加一。",
            "CW_TUXI":"突袭",
            "CW_TUXI_info":"其他角色的回合开始时，若你的牌不小于2，你可弃置两张牌，再获得该名角色一张牌，且若此时，其手牌数或者装备区内的牌数为零，你可以对之使用一张【杀】",
            "SH_JICHI":"急驰",
            "SH_JICHI_info":"你的回合结束时，若你装备区里有牌，你可以弃置其中一张牌，再使用一张【杀】",
            "DW_JIEXI":"劫袭",
            "DW_JIEXI_info":"其他角色的回合开始时，你可以弃置一张手牌，视为对之使用了一张【过河拆桥】。",
            "DW_SHUIDAO":"水盗",
            "DW_SHUIDAO_info":"当你受到伤害后，若来源手牌数大于2，你可以获得其一张手牌",
            "BZMS_JUEDOU":"兵临城下",
            "BZMS_JUEDOU_info":"",
            "BZMS_TAO":"修明政理",
            "BZMS_TAO_info":"",
            "BZMS_BING1":"奋甲百万",
            "BZMS_BING1_info":"",
            "BZMS_BING2":"带甲十万",
            "BZMS_BING2_info":"",
            "BZMS_FANG1":"守圄有余",
            "BZMS_FANG1_info":"",
            "BZMS_FANG2":"天佑之国",
            "BZMS_FANG2_info":"",
            "BZMS_FANG3":"围困之城",
            "BZMS_FANG3_info":"",
            "BZMS_BING3":"无用之兵",
            "BZMS_BING3_info":"",
            "BZMS_FANG4":"困兽犹斗",
            "BZMS_FANG4_info":"",
            "BZMS_MOU1":"以逸待劳",
            "BZMS_MOU1_info":"",
            "BZMS_MOU2":"上兵伐谋",
            "BZMS_MOU2_info":"",
            "BZMS_ZSKP":"专属卡牌",
            "BZMS_ZSKP_info":"",
            ZXL:"招贤令",
            "ZXL_info":"<font color=breen>卡牌技</font> ：你的回合开始时，若你的手牌数小于2，你获得一张【招贤令】",
            KLYH:"亢龙有悔",
            "KLYH_info":"<font color=breen>卡牌技</font> ：当你受到伤害后，你可以获得一张【亢龙有悔】",
            "QXZL_CF":"册封",
            "QXZL_CF_info":"",
            "ZH_PH":"叛汉",
            "ZH_PH_info":"<font color=orange>诸侯技</font> ：当你死亡时，若你势力不同于天子，你有50%的机率因各种因素变为叛贼，然后将体力值补满再失去一点体力上限以及摸取4张牌",
            "zl_sljb":"势力兼并",
            "zl_sljb_info":"",
            "zl_ygql":"一股清流",
            "zl_ygql_info":"",
            "zl_fklx":"府库沦陷",
            "zl_fklx_info":"",
            "zl_kfhs":"匡扶汉室",
            "zl_kfhs_info":"",
            "zl_yktx":"一匡天下",
            "zl_yktx_info":"",
            "zl_yfbz":"一方霸主",
            "zl_yfbz_info":"",
            "zl_txzb":"天下至霸",
            "zl_txzb_info":"",
            "zl_txzd":"天下震动",
            "zl_txzd_info":"",
            "zl_qsjj":"气数将尽",
            "zl_qsjj_info":"",
            "ZH_TQ1":"特权",
            "ZH_TQ1_info":"<font color=red>锁定技</font> ：你的进攻距离加一。",
            "ZH_TQ2":"特权",
            "ZH_TQ2_info":"<font color=red>锁定技</font> ：你的防御距离加一。你的进攻距离加一。你的手牌上限加一。",
            "FC_TQ1":"特权",
            "FC_TQ1_info":"<font color=red>锁定技</font> ：你的手牌上限加一。",
            "FC_TQ2":"特权",
            "FC_TQ2_info":"<font color=red>锁定技</font> ：你的进攻距离加一。你的防御距离加一。",
            "ZH_XH":"挟汉",
            "ZH_XH_info":"<font color=orange>诸侯进阶技</font>：出牌阶段限一次，你可以弃置一张手牌，然后对主公使用，令其跳过其下个出牌阶段，且若此时仅有主公与你，那么其弃置两张牌 ",
            "FC_CX":"丞相",
            "FC_CX_info":"<font color=orange>辅臣进阶技</font> ：每当主公受到伤害后，你可以使用一张【杀】，同时，主公摸取两张牌",
            "SH_ZHISHENG":"智圣",
            "SH_ZHISHENG_info":"<font color=#F0F>被动</font> ：出牌阶段限一次。你可以将任意一张牌当任意一张普通锦囊牌使用",
            "SH_DONGCHA":"洞察",
            "SH_DONGCHA_info":"在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
            "SH_WEIWO":"帷幄",
            "SH_WEIWO_info":"<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减一，其他角色计算与你的距离时，始终加一。",
            "DW_CHUANGZHEN":"闯阵",
            "DW_CHUANGZHEN_info":"当你使用【杀】时，若你和目标均有手牌，你可以弃置两张手牌，然后令目标亦弃置两张手牌",
            "CW_JUEQING":"绝情",
            "CW_JUEQING_info":"<font color=red>锁定技</font> ：你即将造成的伤害均视为失去体力。<font color=#F0F>被动</font> ：当你发动【绝情】时，你需摸取一张牌再弃置一张手牌。",
            "CW_MIEKOU":"灭口",
            "CW_MIEKOU_info":"<font color=red>锁定技</font> ：在你的回合，除你以外，只有处于濒死状态的角色才能使用【桃】。",
            "QX_ZISHOU":"自守",
            "QX_ZISHOU_info":"<font color=red>锁定技</font> ：你的手牌上限增加等同于体力的值，同时，你计算与其他角色的距离时，始终加一。",
            LZD:"隆中对",
            "LZD_info":"<font color=breen>卡牌技</font> ：你的回合开始时，若场上角色为三名，你获得一张【隆中对】",
            "DW_POJUN":"破军",
            "DW_POJUN_info":"当你使用【杀】对一名角色造成伤害后，可以弃置其一张牌",
            "CW_BUJI":"不羁",
            "CW_BUJI_info":"<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减一，其他角色计算与你的距离时，始终减一。",
            "CW_GUICAI":"鬼才",
            "CW_GUICAI_info":"<font color=red></font> ：出牌阶段，你使用【杀】的次数加一。",
            "DW_GUZHENG":"固政",
            "DW_GUZHENG_info":"<font color=red>锁定技</font> ：你的手牌上限加一。",
            "DW_ROUBO":"肉搏",
            "DW_ROUBO_info":"当一名手牌数不小于你的其他角色回合开始时，你可以对之使用一张【杀】，然后其可以对你使用一张【杀】",
            "QX_DANBO":"淡泊",
            "QX_DANBO_info":"<font color=red>锁定技</font> ：摸牌阶段，你少摸一张牌",
            "DW_CHAOCHEN":"朝臣",
            "DW_CHAOCHEN_info":"当你受到伤害后，若你的手牌数不小于2且大于当前体力值，你可以弃置两张牌令一名其他角色获得技能【固政】",
            "QX_DUANXI":"断席",
            "QX_DUANXI_info":"当你成为【杀】的目标时，你可以先弃置一张手牌，然后若此时你的手牌数不大于来源，你可以弃置来源一张牌，然后你再摸取一张牌。",
            "SH_ENYUAN":"恩怨",
            "SH_ENYUAN_info":"当你获得一名其他角色两张或更多的牌后，你可以令其摸一张牌；当你受到1点伤害后，你可以令伤害来源选择一项：1、将一张手牌交给你；2、失去1点体力",
            "SH_JIGONG":"极弓",
            "SH_JIGONG_info":"<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减少任意点",
            "SH_KUANGGU":"狂骨",
            "SH_KUANGGU_info":"当你对距离1以内的一名角色造成1点伤害后，你可以摸一张牌",
            "CW_DANMOU":"胆谋",
            "CW_DANMOU_info":"出牌阶段限一次，若你的体力值大于1，你可以失去一点体力然后弃置一名其他角色的两张牌。",
            "CW_HUALAO":"画牢",
            "CW_HUALAO_info":"<font color=red>锁定技</font> ：当你体力值为1时，你不能成为【杀】的目标",
            "CW_WEICHENG":"危城",
            "CW_WEICHENG_info":"<font color=red>锁定技</font> ：其他角色计算与你的距离时，始终减一",
            "CW_LANGGU":"狼顾",
            "CW_LANGGU_info":"你的回合外当场上有其他角色受到伤害后，你可以获得其一张牌再交给其一张牌，每名角色回合内限一次",
            "CW_MIAOSUAN":"妙算",
            "CW_MIAOSUAN_info":"回合开始时，你可以展示所有手牌，若颜色均相同，你可以摸取两张牌",
            "QX_HUBU":"虎步",
            "QX_HUBU_info":"当你使用的【杀】被闪避时，若目标装备区内有牌，你可以弃置其中一张",
            "QX_LANGLUE":"狼掠",
            "QX_LANGLUE_info":"每当你使用【杀】对一名其他角色造成伤害后，可以获得其一手牌",
            "PC_NL":"内乱",
            "PC_NL_info":"<font color=orange>叛贼限制技</font> ：你的回合开始时，你有50%的机会触发以下效果：1，若场上内奸数小于3，你变为内奸并令所有叛贼和你一同弃置一张手牌，同时，这些叛贼将失去【内乱】。2，你弃置一张手牌。",
            "PC_ZS":"贼首",
            "PC_ZS_info":"<font color=orange>叛贼进阶技</font> ：你计算与其他角色的距离始终减一。你出牌阶段时使用【杀】的次数为2。",
            "CW_LANGGU2":"狼顾",
            "CW_LANGGU2_info":"",
            "SH_SHENCAI":"神才",
            "SH_SHENCAI_info":"<font color=#FF0>神之力</font> ：出牌阶段内，你使用的任何牌均没有任何限制。",
            "CW_QIZUO":"奇佐",
            "CW_QIZUO_info":"当你的回合开始时，若你的手牌数小于体力上限，你可以获得一张【杀】。你的出牌阶段结束时，若你的手中的【杀】大于体力值减去二，你可以跳过你的弃牌阶段",
            "SYMS_BN":"暴怒",
            "SYMS_BN_info":"",
        },
    },
},files:{"character":["qx_bz_yanliang.jpg"],"card":[],"skill":[]},editable:false,}})
//import  AdManager, {userTypes, adTargets } from '../../objects/adManager';
//import dfp from '../../index';
//
//describe( 'AdManager', () => {
//  let adManager;
//  let dfp;
//  before(() => {
//    adManager = new AdManager({configLine: 'somevalue'});
//  });
//
//  it( 'should not throw an error', () => {
//    expect( adManager ).to.not.throw;
//  } );
//
//  it( 'should be a object', () => {
//    expect( adManager ).to.be.an('object');
//  } );
//
//  it( 'should have a configuration ', () => {
//    expect( adManager.config ).to.be.an('object');
//  } );
//
//  it( 'should have a user object ', () => {
//    expect( adManager.user ).to.be.an('object');
//  } );
//
//  it( `should have the 'shouldSendRequestToDfp' function`, () => {
//    expect( adManager.shouldSendRequestToDfp ).to.be.a('function');
//  } );
//
//  it( `should have a referrer blacklist`, () => {
//    expect( adManager.referrerBlacklist).to.be.an('object');
//  } );
//
//  //describe(` function: 'doesUserTypeMatchBannerTargeting'`, () => {
//  //  Object.keys( userTypes ).map(function(userType,index) {
//  //    describe(` for user of type ${userType} `, () => {
//  //      before(() => {
//  //        adManager.user.type = userType;
//  //      });
//  //      Object.keys( adTargets ).map(function(adType, index) {
//  //        it(` should display an adSlot targeted at: '${adType}'` , () => {
//  //          //TODO test it once adSlot can be instantiated.
//  //        })
//  //      });
//  //    });
//  //  });
//  //});
//
//
//} );

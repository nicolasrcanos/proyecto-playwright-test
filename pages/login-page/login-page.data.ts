export class LoginPageData {
    static get credentials(){
        return{
            usernames:{
                standardUser: 'standard_user',
                lockedOutUser: 'locked_out_user',
                problemUser: 'problem_user',
                performanceGlitchUser: 'performance_glitch_user'
            },
            password:{
                password: 'secret_sauce'
            }
        }
    }
}
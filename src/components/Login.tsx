export default function Login() {
    return (
          <div className="relative bg-black shadow rounded-lg font-dm-mono">
              <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                  <h3 className="pt-4 font-medium text-primary-text text-xl">Sign in to our platform</h3>
                  <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-primary-text text-sm">Your email</label>
                      <input type="email" name="email" id="email" className="block border-gray-300 bg-gray-50 p-2.5 border focus:border-brand-green rounded-lg w-full text-gray-900 sm:text-sm focus:ring-brand-green" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 font-medium text-primary-text text-sm">Your password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="block border-gray-300 bg-gray-50 p-2.5 border focus:border-brand-green rounded-lg w-full text-gray-900 sm:text-sm focus:ring-brand-green" required/>
                  </div>
                  <div className="flex justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="border-primary bg-gray-50 border focus:ring-3 focus:ring-brand-green rounded w-4 h-4" required />
                          </div>
                          <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="font-medium text-primary-text">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-primary text-sm hover:underline">Lost Password?</a>
                  </div>
                  <button type="submit" className="bg-brand-green hover:bg-brand-green px-5 py-2.5 rounded-lg w-full font-medium text-black focus:ring-4 focus:ring-brand-green text-center text-sm">Login to your account</button>
                  <div className="font-medium text-primary-text text-sm">
                      Not registered? <a href="#" className="text-brand-green hover:underline">Create account</a>
                  </div>
              </form>
          </div>
    )
  }
  
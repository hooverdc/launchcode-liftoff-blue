export default function Navbar() {
   return(
      <div>
         <nav>
					 <ul>
							<li><a href="">HOME</a></li> |  
							<li><a href="">WATCH HISTORY</a></li> |
							<li><a href="">WATCH LIST</a></li> | 
							<li><form>
								<label> SEARCH </label>
								<input type="text" />
								<input type="submit" value="Q"/>
							</form></li> |
							<li><a href="">LOGIN/PROFILE</a></li>
           </ul>
         </nav>
      </div>
   );
}
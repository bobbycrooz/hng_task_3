
import menu from '../src/assets/images/avatar-m.svg';
import menu2 from '../src/assets/images/share_light.svg';
import slack from '../src/assets/images/slack.svg';
import git from '../src/assets/images/git.svg';
import zuri from '../src/assets/images/zuri.png';
import dp from '../src/assets/images/bobby.png';
import i4g from '../src/assets/images/i4g.png';
import tooltip from '../src/assets/images/tooltip.png';

const Home = () => {

  let slackname = 'bobby dev'

	let Links = [
		{
			name: 'Zuri Team',
			link: 'https://training.zuri.team/',
			id: 'btn__zuri'
		},
		{
			name: 'Zuri Books',
			link: 'http://books.zuri.team/',
			id: 'books',
			title:"Find books about design and coding here."
		},

		{
			name: 'Python Books',
			link: `https://books.zuri.team/python-for-beginners?ref_id=${slackname}`,
			id: 'book__python',
			title:'To feature a book like you want to sell it.'
		},

		{
			name: 'Design Books',
			link: 'https://books.zuri.team/design-rules',
			id: 'book__design',
			title:'click here to pitch the free design book offered by Zuri.'
		},

		{
			name: 'Background Check for Coders',
			link: 'https://background.zuri.team/',
			id: 'pitch',
			title:'Click here to pitch a service for doing background checks on coders'
		}
	];

	return (
		<div className="bg-white px-4 md:px-28">


			<div className="absolute right-4 md:right-56 md:hidden top-8">
				<img src={menu} alt="menu icon" />
			</div>

			<div className="absolute share_button right-4 md:right-56 hidden md:flex top-8">
				<div className="relative">
					<img src={menu2} alt="menu icon" />
				</div>
				<div className="tooltip absolute left-0">
					<img src={tooltip} alt="menu icon" />
				</div>
			</div>

			<div className="dp_container mx-auto w-[200px] flex items-center flex-col mt-12">
				<div className="dp">
					<img src={dp} id="profile__img" alt="profile" />
				</div>
				<h1 id="twitter" className="name text-gray-900 font-bold text-lg my-2">
					@idrisloove
				</h1>
				<h1 id="slack" className="name text-gray-900 font-bold text-lg my-2 hidden">
					bobby dev
				</h1>
			</div>

			<div className="list_container">
				{Links.map((item, index) => (
					<a title={item.title} href={item.link} id={item.id} key={index}>
						<div className="link_card-item bg-gray-200 rounded-lg my-4 flex items-center justify-center p-6">
							<p className="text-[#101828] capitalize font-medium text-sm">{item.name}</p>
						</div>
					</a>
				))}
			</div>

			<div className="social_media-icon mb-11  p-4 flex justify-center">
				<div>
					<img src={slack} alt="menu icon" />
				</div>

				<div className="ml-4">
					<img src={git} alt="menu icon" />
				</div>
			</div>

			<hr className="w-full my-6 border border-gray-200 " />

			<div className="footer-images space-y-3 md:space-y-0 md:flex md:justify-between">
				<div>
					<img src={zuri} alt="menu icon" />
				</div>
				{/* <Image src={slack} alt='menu icon'/> */}
				<h1 className="capitalize gray-500 text-sm">HNG Internship 9 Frontend Task</h1>

				<div>
					<img id="" src={i4g} alt="menu icon" />
				</div>
			</div>
		</div>
	);
};

export default Home;

import { XCircle } from "react-feather";

export const ErrorPage = () => (
	<div className="flex h-full flex-col items-center justify-center gap-2">
		<XCircle
			size={40}
			className="animate-pulse"
		/>
		<div className="text-sm italic text-slate-800">
			There is nothing here! Try looking somewhere else
		</div>
	</div>
);

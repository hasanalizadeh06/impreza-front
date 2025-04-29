import {redirect} from 'next/navigation';
import {defaultLocale} from '@/constants/locale';

export default function RootRedirect() {
    redirect(`/${defaultLocale}`);
}
